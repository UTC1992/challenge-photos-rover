'use client'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Stack, useMediaQuery } from '@mui/material'

import BookmarkComponent from '@/modules/gallery/components/BookmarkComponent/BookmarkComponent'
import IconButtonComponent from '@/modules/gallery/components/IconButtonComponent/IconButtonComponent'
import ImageComponent from '@/modules/gallery/components/ImageComponent/ImageComponent'
import SelectButtonComponent from '@/modules/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TitleComponent from '@/modules/gallery/components/TitleComponent/TitleComponent'

import styles from './page.module.css'

const dummyImages = [
  {
    id: 1,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 2,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 3,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 4,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 5,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 6,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 7,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 8,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 9,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 10,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 11,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 12,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
  {
    id: 13,
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  },
]

const Home: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <main className={styles.page}>
      <div className={styles.page__header}>
        <Stack alignItems="center">
          <TitleComponent title="Galería Mars Rover" />
        </Stack>
      </div>

      <div className={styles.page__filter}>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          columnGap={2}
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          rowGap={1}
        >
          <IconButtonComponent icon={<BookmarkIcon />} />
          <IconButtonComponent icon={<HighlightOffRoundedIcon />} />
          <SelectButtonComponent title="Elija una opción" />
          <SelectButtonComponent title="Elija una opción" />
          <SelectButtonComponent title="Elija una opción" />
        </Stack>
      </div>
      <div className={styles.page__bookmarks}>
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<CancelRoundedIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<CancelRoundedIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<CancelRoundedIcon />}
        />
        <BookmarkComponent
          title="Camera, Date Sun"
          icon={<CancelRoundedIcon />}
        />
      </div>

      <div className={styles.page__main}>
        <Stack
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          columnGap={0.4}
          rowGap={0.4}
        >
          {dummyImages.map((image) => (
            <ImageComponent
              key={image.id}
              url={image.url}
              description="Image Nasa"
            />
          ))}
        </Stack>
      </div>
    </main>
  )
}

export default Home
