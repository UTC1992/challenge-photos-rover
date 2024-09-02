'use client'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import {
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { useRef, useState } from 'react'

import BookmarkComponent from '@/modules/gallery/components/BookmarkComponent/BookmarkComponent'
import ImageComponent from '@/modules/gallery/components/ImageComponent/ImageComponent'
import InputSolComponent from '@/modules/gallery/components/InputSolComponent/InputSolComponent'
import ModalComponent from '@/modules/gallery/components/ModalComponent/ModalComponent'
import SelectButtonComponent from '@/modules/gallery/components/SelectButtonComponent/SelectButtonComponent'
import TabMenuComponent from '@/modules/gallery/components/TabMenuComponent/TabMenuComponent'
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

const dummyBookmarks = [
  {
    id: 1,
    title: 'Camera, Date Sun',
  },
  {
    id: 2,
    title: 'Camera, Date Sun',
  },
  {
    id: 3,
    title: 'Camera, Date Sun',
  },
  {
    id: 4,
    title: 'Camera, Date Sun',
  },
  {
    id: 5,
    title: 'Camera, Date Sun',
  },
  {
    id: 6,
    title: 'Camera, Date Sun',
  },
  {
    id: 7,
    title: 'Camera, Date Sun',
  },
  {
    id: 8,
    title: 'Camera, Date Sun',
  },
  {
    id: 9,
    title: 'Camera, Date Sun',
  },
  {
    id: 10,
    title: 'Camera, Date Sun',
  },
  {
    id: 11,
    title: 'Camera, Date Sun',
  },
  {
    id: 12,
    title: 'Camera, Date Sun',
  },
  {
    id: 13,
    title: 'Camera, Date Sun',
  },
]

const Home: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const containerRef = useRef<HTMLDivElement | undefined>()
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (scrollAmount: number): void => {
    const newScrollPosition = scrollPosition + scrollAmount

    setScrollPosition(newScrollPosition)

    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollPosition
    }
  }

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
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <HighlightOffRoundedIcon />
          </IconButton>
          <SelectButtonComponent title="Camera" />
          <InputSolComponent />
          <SelectButtonComponent title="Earth Day" />
        </Stack>
      </div>
      <div className={styles.page__bookmarks}>
        <Grid2 container columns={24}>
          <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
          <Grid2 size={{ xs: 22, sm: 22, md: 20, lg: 18, xl: 12 }}>
            <Stack
              direction="row"
              columnGap={1}
              sx={{
                overflowX: 'scroll',
                scrollbarWidth: 'none',
              }}
            >
              {dummyBookmarks.map((bookmark) => (
                <BookmarkComponent
                  key={'bookmark-' + bookmark.id}
                  title={bookmark.title}
                  // eslint-disable-next-line no-console
                  onDelete={() => console.log('delete')}
                />
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
        </Grid2>
        {/* <button onClick={() => handleScroll(-500)}>left</button>
        <button onClick={() => handleScroll(500)}>right</button> */}
      </div>

      <div className={styles.page__divider}>
        <Divider />
        <Stack width="100%" alignItems="center">
          <TabMenuComponent />
        </Stack>
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

      <ModalComponent open={false}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText
                sx={{ textAlign: 'center' }}
                primary="Front Hazard Avoidance Camera"
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Front Hazard Avoidance Camera" />
            </ListItemButton>
          </ListItem>
        </List>
      </ModalComponent>
      <ModalComponent open={false}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </ModalComponent>
    </main>
  )
}

export default Home
