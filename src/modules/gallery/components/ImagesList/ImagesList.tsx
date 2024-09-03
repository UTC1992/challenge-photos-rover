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
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      columnGap={0.4}
      rowGap={0.4}
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
