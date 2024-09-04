'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

interface ILayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const GalleryLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default GalleryLayout
