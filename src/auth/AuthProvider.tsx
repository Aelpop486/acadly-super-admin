import React, { createContext, useContext, useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db, missingFirebaseEnv } from '../firebase/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import type { User as FirebaseUser } from 'firebase/auth'

interface User {
  uid: string
  email: string
  isSuperAdmin: boolean
}

interface AuthContextValue {
  user: User | null
  loading: boolean
  authError: string | null
  configNotice: string | null
  login: (email: string, password: string) => Promise<User>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

async function buildSessionUser(firebaseUser: FirebaseUser): Promise<User> {
  const token = await firebaseUser.getIdTokenResult()
  const claims = token.claims
  let isSuperAdmin = claims.role === 'super_admin' || claims.super_admin === true

  const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
  if (userDoc.exists()) {
    const data = userDoc.data()
    isSuperAdmin = isSuperAdmin || data.role === 'super_admin' || data.isSuperAdmin === true
  }

  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email ?? '',
    isSuperAdmin,
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (!missingFirebaseEnv.length) {
      return null
    }

    try {
      const raw = localStorage.getItem('localSuperAdminUser')
      return raw ? JSON.parse(raw) as User : null
    } catch {
      return null
    }
  })
  const [loading, setLoading] = useState(missingFirebaseEnv.length === 0)
  const authError = null
  const configNotice = missingFirebaseEnv.length
    ? 'Firebase connection is pending. Temporary local super admin access is enabled until you add the shared Firebase project values.'
    : null

  useEffect(() => {
    if (missingFirebaseEnv.length) {
      return undefined
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null)
        setLoading(false)
        return
      }

      try {
        const sessionUser = await buildSessionUser(firebaseUser)
        setUser(sessionUser.isSuperAdmin ? sessionUser : null)
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    })

    return unsubscribe
  }, [])

  const login = async (email: string, password: string) => {
    if (missingFirebaseEnv.length) {
      const sessionUser: User = {
        uid: 'local-super-admin',
        email,
        isSuperAdmin: true,
      }

      setUser(sessionUser)
      try {
        localStorage.setItem('localSuperAdminUser', JSON.stringify(sessionUser))
      } catch {
        // Ignore storage failures; the session will still work until refresh.
      }

      return sessionUser
    }

    const credential = await signInWithEmailAndPassword(auth, email, password)
    const sessionUser = await buildSessionUser(credential.user)

    if (!sessionUser.isSuperAdmin) {
      await firebaseSignOut(auth)
      setUser(null)
      throw new Error('Only super admin accounts can access this dashboard.')
    }

    setUser(sessionUser)
    return sessionUser
  }

  const logout = async () => {
    if (missingFirebaseEnv.length) {
      setUser(null)
      try {
        localStorage.removeItem('localSuperAdminUser')
      } catch {
        // Ignore storage failures.
      }
      return
    }

    await firebaseSignOut(auth)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, authError, configNotice, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
