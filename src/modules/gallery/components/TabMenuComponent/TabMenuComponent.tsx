import { ToggleButtonGroup } from '@mui/material'

import { ToggleButtonStyled } from './styledComponents'

interface ITabMenuComponentProps {
  onNavigate?: () => void
}

const TabMenuComponent: React.FC<ITabMenuComponentProps> = ({ onNavigate }) => {
  return (
    <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
      <ToggleButtonStyled value="web" onClick={onNavigate}>
        Curiosity
      </ToggleButtonStyled>
      <ToggleButtonStyled value="android" onClick={onNavigate}>
        Opportunity
      </ToggleButtonStyled>
      <ToggleButtonStyled value="ios" onClick={onNavigate}>
        Spirit
      </ToggleButtonStyled>
    </ToggleButtonGroup>
  )
}

export default TabMenuComponent
