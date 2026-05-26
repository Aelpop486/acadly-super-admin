import { useEffect, useState } from 'react'
import { onAuthChanged } from '../firebase/authHelpers'
import type { User } from 'firebase/auth'

export default function useAuthState() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsub = onAuthChanged((u) => setUser(u))
    return () => unsub()
  }, [])

  return user
}
