import { atom } from 'recoil'

import { IGetPhotosParams } from '../services/getPhotos'

export const photosFiltersAtom = atom<IGetPhotosParams>({
  key: 'photosFiltersAtom',
  default: {
    camera: '',
    earthDate: '',
    sol: '1',
    page: 1,
    rover: '',
  },
})
