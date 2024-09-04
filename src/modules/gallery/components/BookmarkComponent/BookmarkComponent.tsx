'use client'

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
