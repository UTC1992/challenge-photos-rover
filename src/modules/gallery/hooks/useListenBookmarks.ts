import { useEffect, useState } from 'react'

import { IGetPhotosParams } from '../services/getPhotos'
import { listenListBookmark } from '../services/listenListBookmark'

interface IBookmarkItem extends IGetPhotosParams {
  id: string
}

interface IUseListenBookmarksHook {
  items: IBookmarkItem[]
}

export const useListenBookmarks = (): IUseListenBookmarksHook => {
  const [items, setItems] = useState<IBookmarkItem[]>([])

  useEffect(() => {
    const unsubscribe = listenListBookmark((snapshot) => {
      const itemsList = snapshot.docs.map((doc) => ({
        ...(doc.data() as IBookmarkItem),
        id: doc.id,
      }))

      setItems(itemsList)
    })

    return () => unsubscribe()
  }, [])

  return {
    items,
  }
}
