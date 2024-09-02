import { styled, ToggleButton } from '@mui/material'

export const ToggleButtonStyled = styled(ToggleButton)(() => ({
  '&.MuiToggleButton-root': {
    color: 'black',
    border: 'none',
    ':hover': {
      backgroundColor: 'transparent',
    },
    textTransform: 'Capitalize',
  },
}))
