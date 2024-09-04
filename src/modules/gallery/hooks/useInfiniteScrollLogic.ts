import { useEffect, useRef, useState } from 'react'

import { useRecoilValue } from 'recoil'

import { useGetPhotos } from './useGetPhotos'

import { IGetPhotosParams } from '../services/getPhotos'
import { IPhoto } from '../services/interfaces'
import { photosFiltersAtom } from '../states/photosFiltersAtom'

interface IInfiniteScrollLogicHook {
  photos: IPhoto[]
  hasMore: boolean
  filters: IGetPhotosParams
  onFilterPhotos: () => void
}

export const useInfiniteScrollLogic = (
  roverName: string,
): IInfiniteScrollLogicHook => {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [hasMore, setHasMore] = useState(true)
  const page = useRef<number>(1)
  const filters = useRecoilValue(photosFiltersAtom)

  const { result, onGetPhotos, isLoading } = useGetPhotos()

  const onFilterPhotos = (): void => {
    if (roverName) {
      onGetPhotos({
        ...filters,
        rover: roverName,
        page: page.current,
      })
    }
  }

  const onSetInitState = (): void => {
    setPhotos([])
    page.current = 1
    setHasMore(true)
  }

  const onIncrementResults = (): void => {
    setPhotos((prev) => [...prev, ...result])
    page.current = page.current + 1
    setHasMore(result.length > 0)
  }

  useEffect(() => {
    onSetInitState()
    if (roverName) {
      onFilterPhotos()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, roverName])

  useEffect(() => {
    if (result.length > 0) {
      onIncrementResults()
    }

    if (result && !isLoading) {
      setHasMore(result.length > 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return {
    photos,
    hasMore,
    onFilterPhotos,
    filters,
  }
}
