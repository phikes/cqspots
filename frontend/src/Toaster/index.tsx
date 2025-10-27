import cx from "classnames"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { type ToastType, useToaster } from 'react-hot-toast'

const Backgrounds: Partial<{ [key in ToastType]: string }> = {
  blank: 'text-bg-info',
  error: 'text-bg-danger',
  success: 'text-bg-success'
}

export const Toaster = () => {
  const { toasts } = useToaster()

  return <ToastContainer className="me-4 mb-4" position="bottom-end">
    {
      toasts.map((toast) => (
        toast.visible && <Toast className={cx(Backgrounds[toast.type], "text-light")} delay={toast.duration} key={toast.id}>
          <Toast.Body>{typeof toast.message === 'function' ? toast.message(toast) : toast.message}</Toast.Body>
        </Toast>
      ))
    }
  </ToastContainer>
}
