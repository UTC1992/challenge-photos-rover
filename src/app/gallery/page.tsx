import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Stack } from '@mui/material'

import BookmarkComponent from '@/domain/gallery/components/BookmarkComponent/BookmarkComponent'
import IconButtonComponent from '@/domain/gallery/components/IconButtonComponent/IconButtonComponent'
import ImageComponent from '@/domain/gallery/components/ImageComponent/ImageComponent'
import SelectButtonComponent from '@/domain/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TitleComponent from '@/domain/gallery/components/TitleComponent/TitleComponent'

const Home: React.FC = () => {
  return (
    <main>
      <Stack alignItems="center">
        <TitleComponent title="Galería Mars Rover" />
      </Stack>

      <Stack
        direction="row"
        columnGap={2}
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <IconButtonComponent icon={<BookmarkIcon />} />
        <IconButtonComponent icon={<HighlightOffRoundedIcon />} />
        <SelectButtonComponent title="Elija una opción" />
        <SelectButtonComponent title="Elija una opción" />
        <SelectButtonComponent title="Elija una opción" />
      </Stack>
      <Stack direction="row" columnGap={2}>
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<FavoriteBorderIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<FavoriteBorderIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<FavoriteBorderIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<FavoriteBorderIcon />}
        />
      </Stack>

      <Stack direction="row" columnGap={2}>
        <ImageComponent
          url="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
          description="Image Nasa"
        />

        <ImageComponent
          url="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
          description="Image Nasa"
        />

        <ImageComponent
          url="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
          description="Image Nasa"
        />
      </Stack>
    </main>
  )
}

export default Home
