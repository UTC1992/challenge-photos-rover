'use client'

import { ReactNode } from 'react'
import { SelectButtonStyled } from './styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ISelectButtonComponentProps {
  title: string
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
}) => {
  return (
    <SelectButtonStyled>
      {title} <ExpandMoreIcon />
    </SelectButtonStyled>
  )
}

export default SelectButtonComponent
