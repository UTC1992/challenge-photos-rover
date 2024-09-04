import { styled, TextField } from '@mui/material'

export const InputStyled = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
}))
