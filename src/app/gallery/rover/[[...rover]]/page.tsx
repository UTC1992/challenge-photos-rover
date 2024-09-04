'use client'

import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { photosFiltersAtom } from '@/modules/gallery/states/photosFiltersAtom'

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

  return <InfiniteScrollComponent roverName={roverName} />
}

export default Home
