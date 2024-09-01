'use client'

import { ReactNode } from 'react'

import styles from './BookmarkComponent.module.css'

interface IBookmarkComponentProps {
  title: string
  icon?: ReactNode
}

const BookmarkComponent: React.FC<IBookmarkComponentProps> = ({
  title,
  icon,
}) => {
  return (
    <button className={styles.bookmark}>
      {title}
      {icon}
    </button>
  )
}

export default BookmarkComponent
