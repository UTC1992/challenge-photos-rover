import { ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default GalleryLayout
