import { Box, styled, Tab, Tabs } from '@mui/material'

export const BookmarkContainerStyled = styled(Box)(() => ({
  cursor: 'pointer',
  borderRadius: '17px',
}))

export const TabsStyled = styled(Tabs)(() => ({
  '& .MuiTabs-scrollableX': {},
}))

export const TabStyled = styled(Tab)(() => ({
  '&.MuiTab-root': {
    textTransform: 'capitalize',
    padding: '0px 5px',
  },
}))
