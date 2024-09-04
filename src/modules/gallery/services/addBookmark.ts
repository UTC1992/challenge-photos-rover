import { addDoc, collection, DocumentReference } from 'firebase/firestore'

import { db } from '@/modules/core/lib/firebase'

import { IGetPhotosParams } from './getPhotos'
import { ECollections } from '../types/enums'

type IBookmarkPayload = IGetPhotosParams

export const addBookmark = async (data: IBookmarkPayload): Promise<boolean> => {
  try {
    const docRef: DocumentReference = await addDoc(
      collection(db, ECollections.BOOKMARKS),
      data,
    )

    return !!docRef.id
  } catch (error) {
    throw new Error('Insert bookmark')
  }
}
