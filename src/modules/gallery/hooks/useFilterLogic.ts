import dayjs, { Dayjs } from 'dayjs'
import { useDeferredValue, useEffect, useState } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { useGetPhotos } from './useGetPhotos'

import { ICamera } from '../components/SelectCameraComponent/SelectCameraComponent'

import { photosListAtom } from '../states/photosListAtom'
import { roverNameAtom } from '../states/roverNameAtom'

interface IFilterLogicHook {
  marsSol: number
  cameraValue: ICamera | undefined
  earthDate: Dayjs | null
  onChangeCamera: (camera: ICamera) => void
  onChangeEarthDate: (date: Dayjs) => void
  onChangeMarsSol: (value: number) => void
  onResetFilter: () => void
}

export const useFilterLogic = (): IFilterLogicHook => {
  const [marsSol, setMarsSol] = useState(1)
  const deferredMarsSolQuery = useDeferredValue(marsSol)
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null)
  const setPhotosListAtom = useSetRecoilState(photosListAtom)
  const roverName = useRecoilValue(roverNameAtom)

  const onChangeCamera = (camera: ICamera): void => {
    setCameraValue(camera)
  }

  const onChangeEarthDate = (date: Dayjs): void => {
    setEarthDate(date)
  }

  const onChangeMarsSol = (value: number): void => {
    setMarsSol(value)
  }

  const onResetFilter = (): void => {
    setCameraValue(undefined)
    setEarthDate(null)
    setMarsSol(1)
  }

  const { result, onGetPhotos } = useGetPhotos()

  useEffect(() => {
    if (roverName) {
      onGetPhotos({
        rover: roverName,
        sol: deferredMarsSolQuery,
        camera: cameraValue?.abbreviation,
        earthDate: dayjs(earthDate).format('YYYY-MM-DD'),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredMarsSolQuery, cameraValue, earthDate, roverName])

  useEffect(() => {
    if (result.length > 0) {
      setPhotosListAtom(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return {
    marsSol,
    cameraValue,
    earthDate,
    onChangeCamera,
    onChangeEarthDate,
    onChangeMarsSol,
    onResetFilter,
  }
}
