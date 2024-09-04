import { addDoc, collection, DocumentReference } from 'firebase/firestore'

import { db } from '@/modules/core/lib/firebase'

import { IGetPhotosParams } from './getPhotos'

type IBookmarkPayload = IGetPhotosParams

export const addBookmark = async (data: IBookmarkPayload): Promise<boolean> => {
  try {
    const docRef: DocumentReference = await addDoc(
      collection(db, 'bookmark_doc'),
      data,
    )

    return !!docRef.id
  } catch (error) {
    throw new Error('Insert bookmark')
  }
}
