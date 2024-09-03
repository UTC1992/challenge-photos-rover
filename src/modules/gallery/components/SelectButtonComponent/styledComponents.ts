import { Button, styled } from '@mui/material'

export const ButtonStyled = styled(Button)(() => ({
  '&.MuiButton-root': {
    borderRadius: '10px',
  },
  textTransform: 'capitalize',
}))
