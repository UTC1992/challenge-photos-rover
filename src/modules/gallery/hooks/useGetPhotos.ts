import { useMutation } from '@tanstack/react-query'
import { getPhotos, IGetPhotosParams } from '../services/getPhotos'
import { useEffect } from 'react'
import { IPhoto } from '../services/interfaces'

interface IGetPhotosHook {
  isSuccess: boolean
  result: IPhoto[]
  onGetPhotos: (args: IGetPhotosParams) => void
}

export const useGetPhotos = (): IGetPhotosHook => {
  const { mutate, data, isSuccess } = useMutation({
    mutationFn: getPhotos,
    onSuccess: () => {
      console.log('exito')
    },
    onError: (error) => {
      console.log('error')
    },
  })

  const onGetPhotos = (args: IGetPhotosParams): void => {
    mutate({ ...args })
  }

  return {
    isSuccess,
    result: data?.photos || [],
    onGetPhotos,
  }
}
