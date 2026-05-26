import React, { createContext, useContext, useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'
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
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    await firebaseSignOut(auth)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
