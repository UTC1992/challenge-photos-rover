import { CircularProgress, Stack } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useInfiniteScrollLogic } from '../../hooks/useInfiniteScrollLogic'
import ImagesListComponent from '../ImagesListComponent/ImagesListComponent'

interface IInfiniteScrollComponentProps {
  roverName: string
}

const InfiniteScrollComponent: React.FC<IInfiniteScrollComponentProps> = ({
  roverName,
}) => {
  const { photos, hasMore, onFilterPhotos, isLoading } =
    useInfiniteScrollLogic(roverName)

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={onFilterPhotos}
      hasMore={hasMore}
      loader={
        <Stack justifyContent="center" alignItems="center" margin={5}>
          <CircularProgress size={50} />
        </Stack>
      }
      style={{ overflow: 'hidden' }}
    >
      <ImagesListComponent photos={photos} isLoading={isLoading} />
    </InfiniteScroll>
  )
}

export default InfiniteScrollComponent
