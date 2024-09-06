import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { IGetPhotosParams } from '../services/getPhotos'
import { photosFiltersAtom } from '../states/photosFiltersAtom'

type IFilterParams = IGetPhotosParams

interface IControlFilterHook {
  onSetFilter: (filter: IFilterParams) => void
  filter: IFilterParams
}

export const useControlFilter = (roverName: string): IControlFilterHook => {
  const [filter, setFilter] = useRecoilState(photosFiltersAtom)

  const onSetFilter = (args: IFilterParams): void => {
    setFilter((prev) => ({ ...prev, ...args }))
  }

  useEffect(() => {
    onSetFilter({ rover: roverName })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roverName])

  return {
    onSetFilter,
    filter,
  }
}
