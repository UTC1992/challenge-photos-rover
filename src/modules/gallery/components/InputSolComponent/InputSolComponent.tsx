import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { InputAdornment } from '@mui/material'

import { InputStyled } from './styledComponents'

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
