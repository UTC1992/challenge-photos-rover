'use client'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Grid2, IconButton, Tooltip } from '@mui/material'

import { Dayjs } from 'dayjs'

import { StackStyled } from './styledComponent'

import { camerasList } from '../../constants/camerasList'
import InputSolComponent from '../InputSolComponent/InputSolComponent'
import SelectCameraComponent, {
  ICamera,
} from '../SelectCameraComponent/SelectCameraComponent'
import SelectEarthDateComponent from '../SelectEarthDateComponent/SelectEarthDateComponent'
import { useFilterLogic } from '../../hooks/useFilterLogic'

const FilterComponent: React.FC = () => {
  const {
    cameraValue,
    earthDate,
    marsSol,
    onChangeCamera,
    onChangeEarthDate,
    onChangeMarsSol,
    onResetFilter,
  } = useFilterLogic()

  return (
    <StackStyled direction={'row'}>
      <Grid2 container spacing={1}>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <SelectCameraComponent
            options={camerasList}
            cameraValue={cameraValue}
            onChangeCamera={onChangeCamera}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <InputSolComponent value={marsSol} onChange={onChangeMarsSol} />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <SelectEarthDateComponent
            earthDate={earthDate}
            onChangeEarthDate={onChangeEarthDate}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <Tooltip title="Add to favorite" placement="top">
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset filters" placement="top">
            <IconButton onClick={onResetFilter}>
              <HighlightOffRoundedIcon />
            </IconButton>
          </Tooltip>
        </Grid2>
      </Grid2>
    </StackStyled>
  )
}

export default FilterComponent
