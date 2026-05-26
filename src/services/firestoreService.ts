import { db } from '../firebase/firebase'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import type { QuerySnapshot, DocumentData } from 'firebase/firestore'

export async function fetchUsers() {
  const col = collection(db, 'users')
  const snap = await getDocs(col)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export function subscribeToUsers(cb: (docs: any[]) => void) {
  const col = collection(db, 'users')
  return onSnapshot(col, (snap: QuerySnapshot<DocumentData>) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  })
}
