import BookmarkIcon from '@mui/icons-material/Bookmark'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Grid2, IconButton } from '@mui/material'

import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import { StackStyled } from './styledComponent'

import { camerasList } from '../../constants/camerasList'
import InputSolComponent from '../InputSolComponent/InputSolComponent'
import SelectCameraComponent, {
  ICamera,
} from '../SelectCameraComponent/SelectCameraComponent'
import SelectEarthDateComponent from '../SelectEarthDateComponent/SelectEarthDateComponent'

const FilterComponent: React.FC = () => {
  const [marsSol, setMarsSol] = useState(1)
  const [cameraValue, setCameraValue] = useState<ICamera>()
  const [earthDate, setEarthDate] = useState<Dayjs | null>(dayjs(new Date()))

  const onChangeCamera = (camera: ICamera): void => {
    setCameraValue(camera)
  }

  const onChangeEarthDate = (date: Dayjs): void => {
    setEarthDate(date)
  }

  // eslint-disable-next-line no-console
  console.log(
    marsSol,
    cameraValue?.abbreviation,
    dayjs(earthDate).format('DD-MM-YYYY'),
  )

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
          <InputSolComponent
            value={marsSol}
            onChange={(value) => setMarsSol(value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }}>
          <SelectEarthDateComponent
            earthDate={earthDate}
            onChangeEarthDate={onChangeEarthDate}
          />
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
