'use client'

import { ReactNode } from 'react'

import { IconButtonStyled } from './stylest'

interface IIconButtonComponentProps {
  icon: ReactNode
}

const IconButtonComponent: React.FC<IIconButtonComponentProps> = ({ icon }) => {
  return <IconButtonStyled>{icon}</IconButtonStyled>
}

export default IconButtonComponent
