'use client'

import { Divider, Stack } from '@mui/material'
import { ReactNode } from 'react'

import BookMarkListComponent from '@/modules/gallery/components/BookMarkListComponent/BookMarkListComponent'
import FilterComponent from '@/modules/gallery/components/FilterComponent/FilterComponent'
import TabMenuComponent from '@/modules/gallery/components/TabMenuComponent/TabMenuComponent'
import TitleComponent from '@/modules/gallery/components/TitleComponent/TitleComponent'
import { useNavigateTo } from '@/modules/gallery/hooks/useNavigateTo'

import styles from './layout.module.css'

interface ILayoutProps {
  children: ReactNode
}

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  const { onNavigate } = useNavigateTo()

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

      <div className={styles.page__menu}>
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
