import {
  collection,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from 'firebase/firestore'

import { db } from '@/modules/core/lib/firebase'

export const listenListBookmark = (
  callback: (snapshot: QuerySnapshot<DocumentData>) => void,
): Unsubscribe => {
  const collectionRef = collection(db, 'bookmark_doc')

  const unsubscribe = onSnapshot(collectionRef, callback, (error) => {
    throw new Error('Error getting documents: ' + error)
  })

  return unsubscribe
}
