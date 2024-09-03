import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useState } from 'react'

import ModalComponent from '../ModalComponent/ModalComponent'
import SelectButtonComponent from '../SelectButtonComponent/SelectButtonComponent'

const SelectEarthDateComponent: React.FC = () => {
  const [open, setOpen] = useState(false)

  const onChangeOpen = (): void => {
    setOpen(!open)
  }

  return (
    <>
      <SelectButtonComponent title="Earth Date" onShow={onChangeOpen} />
      {open && (
        <ModalComponent open={open} onClose={onChangeOpen} title="Cameras">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </ModalComponent>
      )}
    </>
  )
}

export default SelectEarthDateComponent
