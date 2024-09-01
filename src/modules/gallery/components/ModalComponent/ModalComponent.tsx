import CloseIcon from '@mui/icons-material/Close'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { ReactNode } from 'react'

import styles from './ModalComponent.module.css'

import { DialogStyled } from './styledComponents'

interface IModalComponentProps {
  open: boolean
  onClose?: () => void
  children?: ReactNode
}

const ModalComponent: React.FC<IModalComponentProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <DialogStyled open={open} fullWidth maxWidth="xs">
      <div className={styles.icon}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent>{children}</DialogContent>
    </DialogStyled>
  )
}

export default ModalComponent
