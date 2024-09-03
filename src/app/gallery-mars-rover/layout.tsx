'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import styles from './page.module.css'
import { Divider, Stack } from '@mui/material'
import TitleComponent from '@/modules/gallery/components/TitleComponent/TitleComponent'
import FilterComponent from '@/modules/gallery/components/FilterComponent/FilterComponent'
import BookMarkListComponent from '@/modules/gallery/components/BookMarkListComponent/BookMarkListComponent'
import TabMenuComponent from '@/modules/gallery/components/TabMenuComponent/TabMenuComponent'
import ImagesList from '@/modules/gallery/components/ImagesList/ImagesList'

interface ILayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <main className={styles.page}>
          <div className={styles.page__header}>
            <Stack alignItems="center">
              <TitleComponent title="Gallery Mars Rover" />
            </Stack>
          </div>

          <div className={styles.page__filter}>
            <FilterComponent />
          </div>
          <div className={styles.page__bookmarks}>
            <BookMarkListComponent />
          </div>

          <div className={styles.page__divider}>
            <Divider />
            <Stack width="100%" alignItems="center">
              <TabMenuComponent />
            </Stack>
          </div>
          <div className={styles.page__main}>{children}</div>
        </main>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default GalleryLayout
