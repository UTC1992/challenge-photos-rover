import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { InputAdornment } from '@mui/material'

import { InputStyled } from './styledComponents'

interface IInputSolComponentProps {
  value?: number
  onChange?: (value: number) => void
}

const InputSolComponent: React.FC<IInputSolComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <InputStyled
      variant="outlined"
      size="small"
      placeholder="Mars Sol"
      value={value}
      fullWidth
      onChange={(e) => {
        if (onChange) {
          onChange(Number(e.target.value))
        }
      }}
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
