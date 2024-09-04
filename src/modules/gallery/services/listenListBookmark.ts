import {
  collection,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from 'firebase/firestore'

import { db } from '@/modules/core/lib/firebase'
import { ECollections } from '../types/enums'

export const listenListBookmark = (
  callback: (snapshot: QuerySnapshot<DocumentData>) => void,
): Unsubscribe => {
  const collectionRef = collection(db, ECollections.BOOKMARKS)

  const unsubscribe = onSnapshot(collectionRef, callback, (error) => {
    throw new Error('Error getting documents: ' + error)
  })

  return unsubscribe
}
