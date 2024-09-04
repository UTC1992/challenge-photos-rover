import dayjs, { Dayjs } from 'dayjs'
import { useDeferredValue, useEffect, useState } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { useAddBookmark } from './useAddBookmark'

import { ICamera } from '../components/SelectCameraComponent/SelectCameraComponent'
import { photosFiltersAtom } from '../states/photosFiltersAtom'
import { useControlFilter } from './useControlFilter'

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
  const { filter, onSetFilter } = useControlFilter()

  const [marsSol, setMarsSol] = useState(1)
  const deferredMarsSolQuery = useDeferredValue(marsSol)
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null)

  const { onAddBookmark } = useAddBookmark()

  const onAddBookmarkHandler = (): void => {
    onAddBookmark(filter)
  }

  const onChangeCamera = (camera: ICamera): void => {
    setCameraValue(camera)
    onSetFilter({ ...filter, camera: camera.abbreviation })
  }

  const onChangeEarthDate = (date: Dayjs): void => {
    setEarthDate(date)
    onSetFilter({ ...filter, earthDate: dayjs(date).format('YYYY-MM-DD') })
  }

  const onChangeMarsSol = (value: number): void => {
    setMarsSol(value)
  }

  const onResetFilter = (): void => {
    setCameraValue(undefined)
    setEarthDate(null)
    setMarsSol(1)
    onSetFilter({ ...filter, camera: '', earthDate: '', sol: 1, page: 1 })
  }

  useEffect(() => {
    onSetFilter({ ...filter, sol: deferredMarsSolQuery })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredMarsSolQuery])

  useEffect(() => {
    setCameraValue(
      filter.camera
        ? { camera: filter.camera, abbreviation: filter.camera }
        : undefined,
    )
    setEarthDate(filter.earthDate ? dayjs(filter.earthDate) : null)
    setMarsSol(Number(filter.sol))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

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
