import { useMutation } from '@tanstack/react-query'

import { addBookmark } from '../services/addBookmark'
import { IGetPhotosParams } from '../services/getPhotos'

interface IAddBookmarkHook {
  onAddBookmark: (item: IGetPhotosParams) => void
  isInserted?: boolean
  isLoading?: boolean
}

export const useAddBookmark = (): IAddBookmarkHook => {
  const { mutate, data, isPending } = useMutation({ mutationFn: addBookmark })

  const onAddBookmark = (item: IGetPhotosParams): void => {
    mutate(item)
  }

  return {
    onAddBookmark,
    isInserted: data,
    isLoading: isPending,
  }
}
