'use client'

import { ToggleButtonGroup } from '@mui/material'

import { useState, useTransition } from 'react'

import { ToggleButtonStyled } from './styledComponents'
import { useRecoilValue } from 'recoil'
import { photosFiltersAtom } from '../../states/photosFiltersAtom'

interface ITabMenuComponentProps {
  onNavigate: (value: string) => void
}

const TabMenuComponent: React.FC<ITabMenuComponentProps> = ({ onNavigate }) => {
  const filter = useRecoilValue(photosFiltersAtom)
  const [roverName, setRoverName] = useState(filter.rover)
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
        selected={filter.rover === 'curiosity'}
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
        selected={filter.rover === 'opportunity'}
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
        selected={filter.rover === 'spirit'}
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
