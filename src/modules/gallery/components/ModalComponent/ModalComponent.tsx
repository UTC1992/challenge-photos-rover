import CloseIcon from '@mui/icons-material/Close'
import { DialogContent, IconButton } from '@mui/material'
import { ReactNode } from 'react'

import {
  BoxCloseIconStyled,
  DialogStyled,
  BoxTitleStyled,
} from './styledComponents'

interface IModalComponentProps {
  open: boolean
  onClose?: () => void
  children?: ReactNode
  title?: string
}

const ModalComponent: React.FC<IModalComponentProps> = ({
  open,
  onClose,
  children,
  title,
}) => {
  return (
    <DialogStyled open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <BoxTitleStyled>{title}</BoxTitleStyled>
      <BoxCloseIconStyled>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </BoxCloseIconStyled>
      <DialogContent>{children}</DialogContent>
    </DialogStyled>
  )
}

export default ModalComponent
