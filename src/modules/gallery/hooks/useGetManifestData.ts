import { useMutation, useQuery } from '@tanstack/react-query'
import { getManifest } from '../services/getManifest'
import { useEffect, useState } from 'react'

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
  }, [roverName])

  return {
    listYears: data?.listYears || [],
    isLoading: isPending,
    lastDate: data?.lastDate || '',
  }
}
