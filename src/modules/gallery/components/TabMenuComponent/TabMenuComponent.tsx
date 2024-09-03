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
    startTransition(() => {
      setRoverName(newAlignment)
    })
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
        onClick={() => onNavigate('curiosity')}
      >
        Curiosity
      </ToggleButtonStyled>
      <ToggleButtonStyled
        value="opportunity"
        onClick={() => onNavigate('opportunity')}
      >
        Opportunity
      </ToggleButtonStyled>
      <ToggleButtonStyled value="spirit" onClick={() => onNavigate('spirit')}>
        Spirit
      </ToggleButtonStyled>
    </ToggleButtonGroup>
  )
}

export default TabMenuComponent
