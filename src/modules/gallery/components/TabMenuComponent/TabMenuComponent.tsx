import { ToggleButtonGroup } from '@mui/material'

import { useState, useTransition } from 'react'

import { ToggleButtonStyled } from './styledComponents'

interface ITabMenuComponentProps {
  onNavigate: (value: string) => void
}

const TabMenuComponent: React.FC<ITabMenuComponentProps> = ({ onNavigate }) => {
  const [roverName, setRoverName] = useState('curiosity')
  const [, startTransition] = useTransition()

  const onChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ): void => {
    setRoverName(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={roverName}
      onChange={onChange}
      exclusive
      aria-label="Platform"
    >
      <ToggleButtonStyled
        value="curiosity"
        onClick={() => {
          startTransition(() => {
            onNavigate('curiosity')
          })
        }}
      >
        Curiosity
      </ToggleButtonStyled>
      <ToggleButtonStyled
        value="opportunity"
        onClick={() =>
          startTransition(() => {
            onNavigate('opportunity')
          })
        }
      >
        Opportunity
      </ToggleButtonStyled>
      <ToggleButtonStyled
        value="spirit"
        onClick={() =>
          startTransition(() => {
            onNavigate('spirit')
          })
        }
      >
        Spirit
      </ToggleButtonStyled>
    </ToggleButtonGroup>
  )
}

export default TabMenuComponent
