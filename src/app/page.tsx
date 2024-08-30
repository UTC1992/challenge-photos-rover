import SelectButtonComponent from '@/domain/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TitleComponent from '@/domain/gallery/components/TitleComponent/TitleComponent'

export default function Home() {
  return (
    <main>
      <TitleComponent title="Galería Mars Rover" />
      <SelectButtonComponent title="Elija una opción" />
    </main>
  )
}
