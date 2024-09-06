'use client'

import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'

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

  // set rover name
  useControlFilter(roverName)

  return <InfiniteScrollComponent roverName={roverName} />
}

export default Home
