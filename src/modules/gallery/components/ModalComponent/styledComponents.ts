import { Box, Dialog, DialogTitle, styled } from '@mui/material'

export const DialogStyled = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '1rem',
  },
}))

export const BoxTitleStyled = styled(DialogTitle)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: '600',
}))

export const BoxCloseIconStyled = styled(Box)(() => ({
  position: 'absolute',
  top: '0.1rem',
  right: '0.1rem',
}))
