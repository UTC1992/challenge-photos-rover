import { useMutation } from '@tanstack/react-query'

import { getPhotos, IGetPhotosParams } from '../services/getPhotos'
import { IPhoto } from '../services/interfaces'

interface IGetPhotosHook {
  isSuccess: boolean
  result: IPhoto[]
  onGetPhotos: (args: IGetPhotosParams) => void
  isLoading: boolean
}

export const useGetPhotos = (): IGetPhotosHook => {
  const { mutate, data, isSuccess, isPending } = useMutation({
    mutationFn: getPhotos,
  })

  const onGetPhotos = (args: IGetPhotosParams): void => {
    mutate({ ...args })
  }

  return {
    isSuccess,
    result: data?.photos || [],
    onGetPhotos,
    isLoading: isPending,
  }
}
