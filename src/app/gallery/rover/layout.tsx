'use client'

import { Divider, Stack } from '@mui/material'
import styles from './layout.module.css'
import TitleComponent from '@/modules/gallery/components/TitleComponent/TitleComponent'
import FilterComponent from '@/modules/gallery/components/FilterComponent/FilterComponent'
import BookMarkListComponent from '@/modules/gallery/components/BookMarkListComponent/BookMarkListComponent'
import TabMenuComponent from '@/modules/gallery/components/TabMenuComponent/TabMenuComponent'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  const router = useRouter()

  const onNavigate = (rover: string): void => {
    router.push(`/gallery/rover/${rover}`)
  }

  return (
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
          <TabMenuComponent onNavigate={onNavigate} />
        </Stack>
      </div>
      <div className={styles.page__main}>{children}</div>
    </main>
  )
}

export default GalleryLayout
