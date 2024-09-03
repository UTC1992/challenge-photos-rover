'use client'

import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import ImagesList from '@/modules/gallery/components/ImagesList/ImagesList'
import { photosListAtom } from '@/modules/gallery/states/photosListAtom'

import { roverNameAtom } from '@/modules/gallery/states/roverNameAtom'

export interface IParamsPage {
  params: { rover: string }
}

const Home: React.FC<IParamsPage> = ({ params }) => {
  const photos = useRecoilValue(photosListAtom)
  const setRoverNameAtom = useSetRecoilState(roverNameAtom)

  useEffect(() => {
    setRoverNameAtom(params.rover)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  // const containerRef = useRef<HTMLDivElement | undefined>()
  // const [scrollPosition, setScrollPosition] = useState(0)

  // const handleScroll = (scrollAmount: number): void => {
  //   const newScrollPosition = scrollPosition + scrollAmount

  //   setScrollPosition(newScrollPosition)

  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft = newScrollPosition
  //   }
  // }

  return (
    // <main className={styles.page}>
    //   <div className={styles.page__header}>
    //     <Stack alignItems="center">
    //       <TitleComponent title="Galería Mars Rover" />
    //     </Stack>
    //   </div>

    //   <div className={styles.page__filter}>
    //     <FilterComponent />
    //   </div>
    //   <div className={styles.page__bookmarks}>
    //     <Grid2 container columns={24}>
    //       <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
    //       <Grid2 size={{ xs: 22, sm: 22, md: 20, lg: 18, xl: 12 }}>
    //         <Stack
    //           direction="row"
    //           columnGap={1}
    //           sx={{
    //             overflowX: 'scroll',
    //             scrollbarWidth: 'none',
    //           }}
    //         >
    //           {dummyBookmarks.map((bookmark) => (
    //             <BookmarkComponent
    //               key={'bookmark-' + bookmark.id}
    //               title={bookmark.title}
    //               // eslint-disable-next-line no-console
    //               onDelete={() => console.log('delete')}
    //             />
    //           ))}
    //         </Stack>
    //       </Grid2>
    //       <Grid2 size={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 6 }} />
    //     </Grid2>
    //     {/* <button onClick={() => handleScroll(-500)}>left</button>
    //     <button onClick={() => handleScroll(500)}>right</button> */}
    //   </div>

    //   <div className={styles.page__divider}>
    //     <Divider />
    //     <Stack width="100%" alignItems="center">
    //       <TabMenuComponent />
    //     </Stack>
    //   </div>

    <ImagesList photos={photos} />
    // </main>
  )
}

export default Home
