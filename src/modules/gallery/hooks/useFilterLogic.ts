import dayjs, { Dayjs } from 'dayjs'
import { useDeferredValue, useEffect, useState } from 'react'

import { useAddBookmark } from './useAddBookmark'
import { useControlFilter } from './useControlFilter'

import { ICamera } from '../components/SelectCameraComponent/SelectCameraComponent'
import { useGetManifestData } from './useGetManifestData'

interface IFilterLogicHook {
  marsSol: number
  cameraValue: ICamera | undefined
  earthDate: Dayjs | null
  onChangeCamera: (camera: ICamera) => void
  onChangeEarthDate: (date: Dayjs) => void
  onChangeMarsSol: (value: number) => void
  onResetFilter: () => void
  onAddBookmarkHandler: () => void
  listYears: string[] | undefined
}

export const useFilterLogic = (): IFilterLogicHook => {
  const [marsSol, setMarsSol] = useState(1)
  const deferredMarsSolQuery = useDeferredValue(marsSol)
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null)

  // control filter
  const { filter, onSetFilter } = useControlFilter()
  // add bookmark service
  const { onAddBookmark } = useAddBookmark()
  // get list years
  const { listYears, lastDate } = useGetManifestData(filter.rover)

  const onAddBookmarkHandler = (): void => {
    onAddBookmark(filter)
  }

  const onChangeCamera = (camera: ICamera): void => {
    setCameraValue(camera)
    onSetFilter({ ...filter, camera: camera.abbreviation })
  }

  const onChangeEarthDate = (date: Dayjs): void => {
    console.log(date)
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
    setEarthDate(filter.earthDate ? dayjs(filter.earthDate) : dayjs(lastDate))
    setMarsSol(Number(filter.sol))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  useEffect(() => {
    setEarthDate(dayjs(lastDate))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastDate])

  return {
    marsSol,
    cameraValue,
    earthDate,
    onChangeCamera,
    onChangeEarthDate,
    onChangeMarsSol,
    onResetFilter,
    onAddBookmarkHandler,
    listYears,
  }
}
