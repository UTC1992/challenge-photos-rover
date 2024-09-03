import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import ModalComponent from '../ModalComponent/ModalComponent'
import SelectButtonComponent from '../SelectButtonComponent/SelectButtonComponent'

interface ISelectEarthDateComponentProps {
  onChangeEarthDate?: (date: Dayjs) => void
  earthDate?: Dayjs | null
}

const SelectEarthDateComponent: React.FC<ISelectEarthDateComponentProps> = ({
  onChangeEarthDate,
  earthDate,
}) => {
  const [open, setOpen] = useState(false)

  const onChangeOpen = (): void => {
    setOpen(!open)
  }

  const onChangeDate = (date: Dayjs): void => {
    if (onChangeEarthDate) {
      onChangeEarthDate(date)
    }
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
