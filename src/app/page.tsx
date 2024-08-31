import BookmarkComponent from '@/domain/gallery/components/BookmarkComponent/BookmarkComponent'
import SelectButtonComponent from '@/domain/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TitleComponent from '@/domain/gallery/components/TitleComponent/TitleComponent'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButtonComponent from '@/domain/gallery/components/IconButtonComponent/IconButtonComponent'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ImageComponent from '@/domain/gallery/components/ImageComponent/ImageComponent'

export default function Home() {
  return (
    <main>
      <TitleComponent title="Galería Mars Rover" />
      <SelectButtonComponent title="Elija una opción" />
      <BookmarkComponent
        title="Camera, Date Sun"
        icon={<FavoriteBorderIcon />}
      />
      <IconButtonComponent icon={<BookmarkIcon />} />
      <ImageComponent
        url="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
        description="Image Nasa"
      />
    </main>
  )
}
