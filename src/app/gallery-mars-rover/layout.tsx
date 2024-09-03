'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

interface ILayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  )
}

export default GalleryLayout
