import { Autocomplete, Stack, styled } from '@mui/material'

export const StackStyled = styled(Stack)(() => ({
  width: '100%',
  alignItems: 'center',
  columnGap: '10px',
  flexWrap: 'wrap',
  rowGap: '10px',
}))

export const AutocompleteStyled = styled(Autocomplete)(() => ({
  '& .MuiAutocomplete-inputRoot': {
    borderRadius: '10px',
  },
  minWidth: '8rem',
}))
