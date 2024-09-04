import { useSnackbar } from 'notistack'

import { IInfoAlert } from '../types/interfaces'

interface IShowAlertHook {
  onAddAlert: (item: IInfoAlert) => void
}

export const useShowAlert = (): IShowAlertHook => {
  const { enqueueSnackbar } = useSnackbar()

  const onAddAlert = (item: IInfoAlert): void => {
    enqueueSnackbar(item.message, {
      variant: item.severity,
    })
  }

  return {
    onAddAlert,
  }
}
