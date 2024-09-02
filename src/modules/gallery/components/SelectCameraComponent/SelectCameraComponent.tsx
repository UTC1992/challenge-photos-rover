import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'

import ModalComponent from '../ModalComponent/ModalComponent'
import SelectButtonComponent from '../SelectButtonComponent/SelectButtonComponent'

const SelectCameraComponent: React.FC = () => {
  const [open, setOpen] = useState(false)

  const onChangeOpen = (): void => {
    setOpen(!open)
  }

  return (
    <>
      <SelectButtonComponent title="Camera" onShow={onChangeOpen} />
      {open && (
        <ModalComponent open={open} onClose={onChangeOpen}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemText
                  sx={{ textAlign: 'center' }}
                  primary="Front Hazard Avoidance Camera"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </ModalComponent>
      )}
    </>
  )
}

export default SelectCameraComponent
