import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Grid2, IconButton } from '@mui/material'

import { useState } from 'react'

import { StackStyled } from './styledComponent'

import { camerasList } from '../../constants/camerasList'
import InputSolComponent from '../InputSolComponent/InputSolComponent'
import SelectCameraComponent from '../SelectCameraComponent/SelectCameraComponent'
import SelectEarthDateComponent from '../SelectEarthDateComponent/SelectEarthDateComponent'

const FilterComponent: React.FC = () => {
  const [marsSol, setMarsSol] = useState(1)

  return (
    <StackStyled direction={'row'}>
      <Grid2 container spacing={1}>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <SelectCameraComponent options={camerasList} />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <InputSolComponent
            value={marsSol}
            onChange={(value) => setMarsSol(value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <SelectEarthDateComponent />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <HighlightOffRoundedIcon />
          </IconButton>
        </Grid2>
      </Grid2>
    </StackStyled>
  )
}

export default FilterComponent
