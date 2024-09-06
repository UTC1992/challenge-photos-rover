'use client'

import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { useControlFilter } from '@/modules/gallery/hooks/useControlFilter'

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
  const roverName = params.rover?.length ? params.rover[0] : 'curiosity'
  const { onSetFilter } = useControlFilter()

  useEffect(() => {
    onSetFilter({ rover: roverName })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return <InfiniteScrollComponent roverName={roverName} />
}

export default Home
