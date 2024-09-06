import { useMutation } from '@tanstack/react-query'

import { useEffect } from 'react'

import { getManifest } from '../services/getManifest'

interface IManifestDataHook {
  listYears: string[]
  isLoading: boolean
  lastDate: string
}

export const useGetManifestData = (roverName: string): IManifestDataHook => {
  const { mutate, data, isPending } = useMutation({
    mutationFn: getManifest,
  })

  useEffect(() => {
    if (roverName) {
      mutate(roverName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roverName])

  return {
    listYears: data?.listYears || [],
    isLoading: isPending,
    lastDate: data?.lastDate || '',
  }
}
