'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { SelectButtonStyled } from './styles'

interface ISelectButtonComponentProps {
  title: string
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
}) => {
  return (
    <SelectButtonStyled>
      {title}
      <ExpandMoreIcon />
    </SelectButtonStyled>
  )
}

export default SelectButtonComponent
