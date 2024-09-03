import { useEffect, useState } from 'react'
import { ICamera } from '../components/SelectCameraComponent/SelectCameraComponent'
import dayjs, { Dayjs } from 'dayjs'
import { useGetPhotos } from './useGetPhotos'
import { useSetRecoilState } from 'recoil'
import { photosListAtom } from '../states/photosListAtom'

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
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null)
  const setPhotosListAtom = useSetRecoilState(photosListAtom)

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
    onGetPhotos({
      rover: 'curiosity',
      sol: marsSol,
      camera: cameraValue?.abbreviation,
      earthDate: dayjs(earthDate).format('YYYY-MM-DD'),
    })
  }, [marsSol, cameraValue, earthDate])

  useEffect(() => {
    if (result.length > 0) {
      setPhotosListAtom(result)
    }
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
