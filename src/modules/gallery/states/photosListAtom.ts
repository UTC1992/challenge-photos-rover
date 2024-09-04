import { atom } from 'recoil'

import { IPhoto } from '../types/interfaces'

export const photosListAtom = atom<IPhoto[]>({
  key: 'photosListAtom',
  default: [],
})
