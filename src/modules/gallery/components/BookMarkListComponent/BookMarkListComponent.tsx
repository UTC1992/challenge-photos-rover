import { Grid2, Stack, Tooltip } from '@mui/material'

import { useListenBookmarks } from '../../hooks/useListenBookmarks'
import BookmarkComponent from '../BookmarkComponent/BookmarkComponent'
import { useDeleteBookmark } from '../../hooks/useDeleteBookmark'

const BookMarkListComponent: React.FC = () => {
  const { items } = useListenBookmarks()
  const { onDeleteBookmark } = useDeleteBookmark()

  return (
    <Grid2 container columns={24}>
      <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
      <Grid2 size={{ xs: 22, sm: 22, md: 20, lg: 18, xl: 12 }}>
        <Stack
          direction="row"
          columnGap={1}
          sx={{
            overflowX: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          {items.map(({ id, ...rest }, index) => (
            <BookmarkComponent
              key={'bookmark-' + id}
              title={`${index + 1} - ${rest.rover} - ${rest.camera}`}
              onDelete={() => onDeleteBookmark(id)}
            />
          ))}
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
    </Grid2>
  )
}

export default BookMarkListComponent
