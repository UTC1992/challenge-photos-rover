import { deleteDoc, doc } from 'firebase/firestore'

import { db } from '@/modules/core/lib/firebase'

import { ECollections } from '../types/enums'

export const deleteBookmark = async (documentId: string): Promise<void> => {
  try {
    const docRef = doc(db, ECollections.BOOKMARKS, documentId)

    await deleteDoc(docRef)
  } catch (error) {
    throw new Error('Delete bookmark')
  }
}
