import { useRecoilState } from 'recoil'
import { photosFiltersAtom } from '../states/photosFiltersAtom'
import { IGetPhotosParams } from '../services/getPhotos'

type IFilterParams = IGetPhotosParams

interface IControlFilterHook {
  onSetFilter: (filter: IFilterParams) => void
  filter: IFilterParams
}

export const useControlFilter = (): IControlFilterHook => {
  const [filter, setFilter] = useRecoilState(photosFiltersAtom)

  const onSetFilter = (filter: IFilterParams): void => {
    setFilter((prev) => ({ ...prev, ...filter }))
  }

  return {
    onSetFilter,
    filter,
  }
}
