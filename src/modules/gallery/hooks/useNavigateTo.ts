import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

import { photosFiltersAtom } from '../states/photosFiltersAtom'

interface INavigateToHook {
  onNavigate: (rover: string) => void
}

export const useNavigateTo = (): INavigateToHook => {
  const setFilter = useSetRecoilState(photosFiltersAtom)
  const router = useRouter()

  const onNavigate = (rover: string): void => {
    setFilter((prev) => ({ ...prev, rover }))
    router.push(`/gallery/rover/${rover}`)
  }

  return { onNavigate }
}
