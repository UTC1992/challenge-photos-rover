import { useMutation } from '@tanstack/react-query'

import { useShowAlert } from './useShowAlert'

import { deleteBookmark } from '../services/deleteBookmark'

interface IUseDeleteBookmarkHook {
  onDeleteBookmark: (id: string) => void
  isLoading: boolean
  isSuccess: boolean
}

export const useDeleteBookmark = (): IUseDeleteBookmarkHook => {
  const { onAddAlert } = useShowAlert()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      onAddAlert({
        open: true,
        message: 'Bookmark deleted',
        severity: 'success',
      })
    },
  })

  const onDeleteBookmark = (id: string): void => {
    mutate(id)
  }

  return {
    onDeleteBookmark,
    isLoading: isPending,
    isSuccess,
  }
}
