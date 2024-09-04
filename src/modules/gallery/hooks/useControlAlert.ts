import { useSnackbar } from 'notistack'

import { IInfoAlert } from '../types/interfaces'

interface IUseControlAlertHook {
  onAddAlert: (item: IInfoAlert) => void
}

export const useControlAlert = (): IUseControlAlertHook => {
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
