import { useMutation } from '@tanstack/react-query'
import { deleteBookmark } from '../services/deleteBookmark'

interface IUseDeleteBookmarkHook {
  onDeleteBookmark: (id: string) => void
  isLoading: boolean
  isSuccess: boolean
}

export const useDeleteBookmark = (): IUseDeleteBookmarkHook => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: deleteBookmark,
  })

  const onDeleteBookmark = (id: string) => {
    mutate(id)
  }

  return {
    onDeleteBookmark,
    isLoading: isPending,
    isSuccess,
  }
}
