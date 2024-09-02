import { Box, Dialog, styled } from '@mui/material'

export const DialogStyled = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '1rem',
  },
}))

export const IconContainerStyled = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}))
