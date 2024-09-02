import { InputAdornment } from '@mui/material'
import { InputStyled } from './styledComponents'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

const InputSolComponent: React.FC = () => {
  return (
    <InputStyled
      variant="outlined"
      size="small"
      placeholder="Mars Sol"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <WbSunnyIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  )
}

export default InputSolComponent
