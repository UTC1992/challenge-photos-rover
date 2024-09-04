'use client'

import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'

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
  params: { rover: string }
}

const Home: React.FC<IParamsPage> = ({ params }) => {
  return <InfiniteScrollComponent roverName={params.rover} />
}

export default Home
