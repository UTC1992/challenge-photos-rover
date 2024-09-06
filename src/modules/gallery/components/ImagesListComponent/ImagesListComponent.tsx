import {
  Alert,
  ImageList,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material'

import { ImageBoxStyled } from './styledComponents'

import { IPhoto } from '../../types/interfaces'
import ImageComponent from '../ImageComponent/ImageComponent'

interface IImagesListProps {
  photos: IPhoto[]
  isLoading?: boolean
}

const ImagesListComponent: React.FC<IImagesListProps> = ({
  photos,
  isLoading,
}) => {
  if (photos.length === 0 && !isLoading) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Alert severity="warning">
          <Typography variant="h6">There is not data.</Typography>
        </Alert>
      </Stack>
    )
  }

  return (
    <Stack justifyContent="center" alignItems="center" columnGap={1} rowGap={1}>
      <ImageList variant="standard" cols={3} gap={5}>
        {photos.map((item, index) => (
          <ImageBoxStyled key={`${item.img_src}-${index}`}>
            <ImageComponent description="" url={item.img_src} />
            <ImageListItemBar
              title={item.camera.full_name}
              subtitle={item.rover.name}
              sx={{ borderRadius: '9px' }}
            />
          </ImageBoxStyled>
        ))}
      </ImageList>
    </Stack>
  )
}

export default ImagesListComponent
