import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import ModalComponent from '../ModalComponent/ModalComponent'
import SelectButtonComponent from '../SelectButtonComponent/SelectButtonComponent'

const SelectEarthDateComponent: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [earthDate, setEarthDate] = useState<Dayjs | null>(dayjs(new Date()))

  const onChangeOpen = (): void => {
    setOpen(!open)
  }

  const onChangeDate = (date: Dayjs): void => {
    setEarthDate(date)
    onChangeOpen()
  }

  return (
    <>
      <SelectButtonComponent
        title={earthDate ? dayjs(earthDate).format('DD-MM-YYYY') : 'Earth Date'}
        onShow={onChangeOpen}
      />
      {open && (
        <ModalComponent open={open} onClose={onChangeOpen} title="Earth Date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={earthDate} onChange={onChangeDate} />
          </LocalizationProvider>
        </ModalComponent>
      )}
    </>
  )
}

export default SelectEarthDateComponent
