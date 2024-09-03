'use client'

import { CircularProgress, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import { useGetPhotos } from '@/modules/gallery/hooks/useGetPhotos'

import { IPhoto } from '@/modules/gallery/services/interfaces'
import { useRecoilValue } from 'recoil'
import { photosFiltersAtom } from '@/modules/gallery/states/photosFiltersAtom'

const ImagesList = dynamic(
  () => import('@/modules/gallery/components/ImagesList/ImagesList'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export interface IParamsPage {
  params: { rover: string }
}

const Home: React.FC<IParamsPage> = ({ params }) => {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const { result, onGetPhotos, isLoading } = useGetPhotos()
  const filters = useRecoilValue(photosFiltersAtom)

  useEffect(() => {
    if (params.rover) {
      onGetPhotos({
        ...filters,
        rover: params.rover,
        page,
      })
      setPhotos([])
      setPage(1)
      setHasMore(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, params])

  useEffect(() => {
    if (result.length > 0) {
      setPhotos((prev) => [...prev, ...result])
      setPage((prev) => prev + 1)
      setHasMore(result.length > 0)
    } else if (result && !isLoading) {
      setHasMore(result.length > 0)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return (
    <>
      {result.length > 0 ? (
        <InfiniteScroll
          dataLength={photos.length} // This is important field to render the next data
          next={() => {
            if (params.rover) {
              onGetPhotos({
                ...filters,
                rover: params.rover,
                page,
              })
            }
          }}
          hasMore={hasMore}
          loader={
            <Stack justifyContent="center" alignItems="center" margin={5}>
              <CircularProgress size={50} />
            </Stack>
          }
          style={{ overflow: 'hidden' }}
        >
          <ImagesList photos={photos} />
        </InfiniteScroll>
      ) : (
        <Typography variant="h5">No photos with this filters</Typography>
      )}
    </>
  )
}

export default Home
