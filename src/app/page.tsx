import BookmarkComponent from '@/domain/gallery/components/BookmarkComponent/BookmarkComponent'
import SelectButtonComponent from '@/domain/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TitleComponent from '@/domain/gallery/components/TitleComponent/TitleComponent'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Home() {
  return (
    <main>
      <TitleComponent title="Galería Mars Rover" />
      <SelectButtonComponent title="Elija una opción" />

      <BookmarkComponent
        title="Camera, Date Sun"
        icon={<FavoriteBorderIcon />}
      />
    </main>
  )
}
