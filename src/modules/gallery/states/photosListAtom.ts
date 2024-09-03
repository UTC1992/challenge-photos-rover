import { atom } from 'recoil'

import { IPhoto } from '../services/interfaces'

export const photosListAtom = atom<IPhoto[]>({
  key: 'photosListAtom',
  default: [],
})
