'use client'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import {
  IconButton,
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
      <SelectCameraComponent
        options={camerasList}
        cameraValue={cameraValue}
        onChangeCamera={onChangeCamera}
      />
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
        size="small"
      />
      <SelectEarthDateComponent
        earthDate={earthDate}
        onChangeEarthDate={onChangeEarthDate}
      />
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
