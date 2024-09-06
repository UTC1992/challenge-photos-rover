'use client'

import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { photosFiltersAtom } from '@/modules/gallery/states/photosFiltersAtom'
import { getManifest } from '@/modules/gallery/services/getManifest'

const InfiniteScrollComponent = dynamic<{ roverName: string }>(
  () =>
    import(
      '@/modules/gallery/components/InfiniteScrollComponent/InfiniteScrollComponent'
    ),
  {
    ssr: false,
    loading: () => <Typography>Loading...</Typography>,
  },
)

export interface IParamsPage {
  params: { rover: string[] }
}

const Home: React.FC<IParamsPage> = ({ params }) => {
  const setFilter = useSetRecoilState(photosFiltersAtom)
  const roverName = params.rover?.length ? params.rover[0] : 'curiosity'

  useEffect(() => {
    setFilter((prev) => ({ ...prev, rover: roverName }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    const updateViews = async (): Promise<void> => {
      const maxSol = await getManifest(roverName)

      console.log(maxSol)
    }

    updateViews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <InfiniteScrollComponent roverName={roverName} />
}

export default Home
