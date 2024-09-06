'use client'

import { Grid2 } from '@mui/material'

import {
  BookmarkContainerStyled,
  TabsStyled,
  TabStyled,
} from './styledComponents'

import { useControlFilter } from '../../hooks/useControlFilter'
import { useDeleteBookmark } from '../../hooks/useDeleteBookmark'
import { useListenBookmarks } from '../../hooks/useListenBookmarks'
import BookmarkComponent from '../BookmarkComponent/BookmarkComponent'

const BookMarkListComponent: React.FC = () => {
  const { items } = useListenBookmarks()
  const { onDeleteBookmark } = useDeleteBookmark()
  const { onSetFilter } = useControlFilter()

  return (
    <Grid2 container columns={24}>
      <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
      <Grid2 size={{ xs: 22, sm: 22, md: 20, lg: 18, xl: 12 }}>
        <TabsStyled
          value={0}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {items.map(({ id, ...rest }, index) => (
            <TabStyled
              key={'bookmark-' + id}
              label={
                <BookmarkContainerStyled onClick={() => onSetFilter(rest)}>
                  <BookmarkComponent
                    title={`${index + 1} - ${rest.rover} - ${rest.camera}`}
                    onDelete={() => onDeleteBookmark(id)}
                  />
                </BookmarkContainerStyled>
              }
            />
          ))}
        </TabsStyled>
      </Grid2>
      <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
    </Grid2>
  )
}

export default BookMarkListComponent
