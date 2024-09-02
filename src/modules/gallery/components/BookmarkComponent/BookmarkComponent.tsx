'use client'

import { ReactNode } from 'react'

import styles from './BookmarkComponent.module.css'
import { Chip } from '@mui/material'

interface IBookmarkComponentProps {
  title: string
  onDelete?: () => void
}

const BookmarkComponent: React.FC<IBookmarkComponentProps> = ({
  title,
  onDelete,
}) => {
  return <Chip label={title} onDelete={onDelete} />
}

export default BookmarkComponent
