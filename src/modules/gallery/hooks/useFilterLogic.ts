import dayjs, { Dayjs } from 'dayjs'
import { useDeferredValue, useEffect, useState } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { useAddBookmark } from './useAddBookmark'

import { ICamera } from '../components/SelectCameraComponent/SelectCameraComponent'
import { photosFiltersAtom } from '../states/photosFiltersAtom'

interface IFilterLogicHook {
  marsSol: number
  cameraValue: ICamera | undefined
  earthDate: Dayjs | null
  onChangeCamera: (camera: ICamera) => void
  onChangeEarthDate: (date: Dayjs) => void
  onChangeMarsSol: (value: number) => void
  onResetFilter: () => void
  onAddBookmarkHandler: () => void
}

export const useFilterLogic = (): IFilterLogicHook => {
  const [marsSol, setMarsSol] = useState(1)
  const deferredMarsSolQuery = useDeferredValue(marsSol)
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null)
  const setFilters = useSetRecoilState(photosFiltersAtom)
  const filters = useRecoilValue(photosFiltersAtom)

  const { onAddBookmark } = useAddBookmark()

  const onAddBookmarkHandler = (): void => {
    onAddBookmark(filters)
  }

  const onChangeCamera = (camera: ICamera): void => {
    setCameraValue(camera)
    setFilters((prev) => ({ ...prev, camera: camera.abbreviation }))
  }

  const onChangeEarthDate = (date: Dayjs): void => {
    setEarthDate(date)
    setFilters((prev) => ({
      ...prev,
      earthDate: dayjs(date).format('YYYY-MM-DD'),
    }))
  }

  const onChangeMarsSol = (value: number): void => {
    setMarsSol(value)
  }

  const onResetFilter = (): void => {
    setCameraValue(undefined)
    setEarthDate(null)
    setMarsSol(1)
    setFilters((prev) => ({
      ...prev,
      camera: '',
      earthDate: '',
      sol: 1,
      page: 1,
    }))
  }

  useEffect(() => {
    setFilters((prev) => ({ ...prev, sol: deferredMarsSolQuery }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredMarsSolQuery])

  return {
    marsSol,
    cameraValue,
    earthDate,
    onChangeCamera,
    onChangeEarthDate,
    onChangeMarsSol,
    onResetFilter,
    onAddBookmarkHandler,
  }
}
