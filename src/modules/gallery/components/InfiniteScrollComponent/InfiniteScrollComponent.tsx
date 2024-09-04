import { CircularProgress, Stack } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useInfiniteScrollLogic } from '../../hooks/useInfiniteScrollLogic'
import ImagesList from '../ImagesList/ImagesList'

interface IInfiniteScrollComponentProps {
  roverName: string
}

const InfiniteScrollComponent: React.FC<IInfiniteScrollComponentProps> = ({
  roverName,
}) => {
  const { photos, hasMore, onFilterPhotos } = useInfiniteScrollLogic(roverName)

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
      <ImagesList photos={photos} />
    </InfiniteScroll>
  )
}

export default InfiniteScrollComponent
