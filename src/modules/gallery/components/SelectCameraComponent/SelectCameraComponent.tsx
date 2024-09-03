import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'

import ModalComponent from '../ModalComponent/ModalComponent'
import SelectButtonComponent from '../SelectButtonComponent/SelectButtonComponent'

export interface ICamera {
  abbreviation: string
  camera: string
}

interface ISelectCameraComponentProps {
  options?: ICamera[]
  cameraValue?: ICamera
  onChangeCamera?: (camera: ICamera) => void
}

const SelectCameraComponent: React.FC<ISelectCameraComponentProps> = ({
  options = [],
  cameraValue,
  onChangeCamera,
}) => {
  const [open, setOpen] = useState(false)

  const onChangeOpen = (): void => {
    setOpen(!open)
  }

  return (
    <>
      <SelectButtonComponent
        title={cameraValue?.abbreviation ?? 'Camera'}
        onShow={onChangeOpen}
      />
      {open && (
        <ModalComponent open={open} onClose={onChangeOpen} title="Cameras">
          <List>
            {options.map((item, index) => (
              <ListItem key={`${item}-${index}`} disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (onChangeCamera) {
                      onChangeCamera(item)
                    }
                    onChangeOpen()
                  }}
                >
                  <ListItemText
                    sx={{ textAlign: 'center' }}
                    primary={item.camera}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </ModalComponent>
      )}
    </>
  )
}

export default SelectCameraComponent
