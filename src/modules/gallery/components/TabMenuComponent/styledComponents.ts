import { styled, ToggleButton } from '@mui/material'

export const ToggleButtonStyled = styled(ToggleButton)(() => ({
  '&.MuiToggleButton-root': {
    color: 'black',
    border: 'none',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  fontSize: '0.7rem',
  fontWeight: 600,
  width: '100px',
}))
