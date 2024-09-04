import {
  Alert,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material'

import { IPhoto } from '../../services/interfaces'
import ImageComponent from '../ImageComponent/ImageComponent'

interface IImagesListProps {
  photos: IPhoto[]
}

const ImagesList: React.FC<IImagesListProps> = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Alert severity="warning">
          <Typography variant="h6">There is not data.</Typography>
        </Alert>
      </Stack>
    )
  }

  return (
    <Stack
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      columnGap={1}
      rowGap={1}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.img_src}>
            <ImageComponent description="" url={item.img_src} />
            <ImageListItemBar
              title={item.camera.full_name}
              subtitle={item.rover.name}
              sx={{ borderRadius: '9px' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}

export default ImagesList
