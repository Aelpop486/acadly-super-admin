import { db } from '../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import type { QuerySnapshot, DocumentData } from 'firebase/firestore'

export function subscribeToNotifications(cb: (items: any[]) => void) {
  const col = collection(db, 'notifications')
  return onSnapshot(col, (snap: QuerySnapshot<DocumentData>) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  })
}
