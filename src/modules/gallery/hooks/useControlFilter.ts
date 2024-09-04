import { useRecoilState } from 'recoil'

import { IGetPhotosParams } from '../services/getPhotos'
import { photosFiltersAtom } from '../states/photosFiltersAtom'

type IFilterParams = IGetPhotosParams

interface IControlFilterHook {
  onSetFilter: (filter: IFilterParams) => void
  filter: IFilterParams
}

export const useControlFilter = (): IControlFilterHook => {
  const [filter, setFilter] = useRecoilState(photosFiltersAtom)

  const onSetFilter = (args: IFilterParams): void => {
    setFilter((prev) => ({ ...prev, ...args }))
  }

  return {
    onSetFilter,
    filter,
  }
}
