import { useMutation } from '@tanstack/react-query'

import { useShowAlert } from './useShowAlert'

import { addBookmark } from '../services/addBookmark'
import { IGetPhotosParams } from '../services/getPhotos'

interface IAddBookmarkHook {
  onAddBookmark: (item: IGetPhotosParams) => void
  isInserted?: boolean
  isLoading?: boolean
}

export const useAddBookmark = (): IAddBookmarkHook => {
  const { onAddAlert } = useShowAlert()
  const { mutate, data, isPending } = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      onAddAlert({
        open: true,
        message: 'Bookmark added',
        severity: 'success',
      })
    },
  })

  const onAddBookmark = (item: IGetPhotosParams): void => {
    mutate(item)
  }

  return {
    onAddBookmark,
    isInserted: data,
    isLoading: isPending,
  }
}
