'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import styles from './SelectButtonComponent.module.css'
import { Button } from '@mui/material'
import { ButtonStyled } from './styledComponents'

interface ISelectButtonComponentProps {
  title: string
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
}) => {
  return (
    <ButtonStyled variant="contained">
      {title}
      <ExpandMoreIcon />
    </ButtonStyled>
  )
}

export default SelectButtonComponent
