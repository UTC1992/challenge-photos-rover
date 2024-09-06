'use client'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import {
  Box,
  IconButton,
  InputLabel,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { AutocompleteStyled, StackStyled } from './styledComponent'

import { camerasList } from '../../constants/camerasList'
import { useFilterLogic } from '../../hooks/useFilterLogic'
import SelectCameraComponent from '../SelectCameraComponent/SelectCameraComponent'
import SelectEarthDateComponent from '../SelectEarthDateComponent/SelectEarthDateComponent'

const FilterComponent: React.FC = () => {
  const {
    cameraValue,
    earthDate,
    marsSol,
    onChangeCamera,
    onChangeEarthDate,
    onChangeMarsSol,
    onResetFilter,
    onAddBookmarkHandler,
    listYears,
  } = useFilterLogic()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <StackStyled
      direction={'row'}
      justifyContent={isMobile ? 'flex-start' : 'center'}
    >
      <Box>
        <InputLabel>Camera</InputLabel>
        <SelectCameraComponent
          options={camerasList}
          cameraValue={cameraValue}
          onChangeCamera={onChangeCamera}
        />
      </Box>
      <Box>
        <InputLabel>Mars Sol</InputLabel>
        <AutocompleteStyled
          disablePortal
          options={listYears || []}
          renderInput={(params) => <TextField {...params} size="small" />}
          value={marsSol.toString()}
          onChange={(e, value) => {
            if (typeof value === 'string') {
              onChangeMarsSol(value)
            }
          }}
          onInputChange={(_, value, reason) => {
            if (reason === 'clear') {
              onChangeMarsSol('')
            }

            if (value === '0') {
              onChangeMarsSol('')
            }
          }}
          size="small"
        />
      </Box>
      <Box>
        <InputLabel>Earth Date</InputLabel>
        <SelectEarthDateComponent
          earthDate={earthDate}
          onChangeEarthDate={onChangeEarthDate}
        />
      </Box>
      <Tooltip title="Add to favorite" placement="top">
        <IconButton onClick={onAddBookmarkHandler}>
          <BookmarkIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reset filters" placement="top">
        <IconButton onClick={onResetFilter}>
          <HighlightOffRoundedIcon />
        </IconButton>
      </Tooltip>
    </StackStyled>
  )
}

export default FilterComponent
