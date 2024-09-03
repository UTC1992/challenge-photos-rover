import { Stack } from '@mui/material'

import { IPhoto } from '../../services/interfaces'
import ImageComponent from '../ImageComponent/ImageComponent'

interface IImagesListProps {
  photos: IPhoto[]
}

const ImagesList: React.FC<IImagesListProps> = ({ photos }) => {
  return (
    <Stack
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridTemplateRows="auto"
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      columnGap={1}
      rowGap={1}
    >
      {photos.map((image) => (
        <ImageComponent
          key={image.id}
          url={image.img_src}
          description="Image Nasa"
        />
      ))}
    </Stack>
  )
}

export default ImagesList
