import { toast } from 'react-toastify'

interface ParamsShowMessage {
  message: string
  position:
    | 'bottom-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'top-left'
    | 'top-right'
  type: 'success' | 'error' | 'warning'
  duration?: number
}

export function showMessage(config: ParamsShowMessage) {
  const { position, type, message, duration } = config
  toast[type](message, {
    autoClose: duration || 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    position,
  })
}
