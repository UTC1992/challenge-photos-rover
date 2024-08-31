'use client'

import { ReactNode } from 'react'
import { BookmarkStyled } from './styles'

interface IBookmarkComponentProps {
  title: string
  icon?: ReactNode
}

const BookmarkComponent: React.FC<IBookmarkComponentProps> = ({
  title,
  icon,
}) => {
  return (
    <BookmarkStyled>
      {title}
      {icon}
    </BookmarkStyled>
  )
}

export default BookmarkComponent
