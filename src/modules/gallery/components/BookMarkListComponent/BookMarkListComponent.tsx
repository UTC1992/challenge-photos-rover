import { Grid2, Stack } from '@mui/material'

import BookmarkComponent from '../BookmarkComponent/BookmarkComponent'
const dummyBookmarks = [
  {
    id: 1,
    title: 'Camera, Date Sun',
  },
  {
    id: 2,
    title: 'Camera, Date Sun',
  },
  {
    id: 3,
    title: 'Camera, Date Sun',
  },
  {
    id: 4,
    title: 'Camera, Date Sun',
  },
  {
    id: 5,
    title: 'Camera, Date Sun',
  },
  {
    id: 6,
    title: 'Camera, Date Sun',
  },
  {
    id: 7,
    title: 'Camera, Date Sun',
  },
  {
    id: 8,
    title: 'Camera, Date Sun',
  },
  {
    id: 9,
    title: 'Camera, Date Sun',
  },
  {
    id: 10,
    title: 'Camera, Date Sun',
  },
  {
    id: 11,
    title: 'Camera, Date Sun',
  },
  {
    id: 12,
    title: 'Camera, Date Sun',
  },
  {
    id: 13,
    title: 'Camera, Date Sun',
  },
]
const BookMarkListComponent: React.FC = () => {
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
          {dummyBookmarks.map((bookmark) => (
            <BookmarkComponent
              key={'bookmark-' + bookmark.id}
              title={bookmark.title}
              // eslint-disable-next-line no-console
              onDelete={() => console.log('delete')}
            />
          ))}
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
    </Grid2>
  )
}

export default BookMarkListComponent
