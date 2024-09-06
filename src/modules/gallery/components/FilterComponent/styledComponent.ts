import { Autocomplete, Stack, styled } from '@mui/material'

export const StackStyled = styled(Stack)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const AutocompleteStyled = styled(Autocomplete)(() => ({
  '& .MuiAutocomplete-inputRoot': {
    borderRadius: '10px',
  },
}))
