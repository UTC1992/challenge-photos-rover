'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ButtonStyled } from './styledComponents'

interface ISelectButtonComponentProps {
  title: string
  onShow?: () => void
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
  onShow,
}) => {
  return (
    <ButtonStyled fullWidth variant="contained" onClick={onShow}>
      {title}
      <ExpandMoreIcon />
    </ButtonStyled>
  )
}

export default SelectButtonComponent
