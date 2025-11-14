import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import { NavLink } from "react-router"
import { ResetPasswordForm, type Values } from "./ResetPasswordForm"
import { useResetPassword } from "./useResetPassword"
import { useCallback, useRef, useState } from "react"
import toast from "react-hot-toast"
import type { FormikProps } from "formik"

export const ResetPassword = () => {
  const formikRef = useRef<FormikProps<Values>>(null)
  const resetPassword = useResetPassword()
  const [success, setSuccess] = useState(false)

  const doResetPassword = useCallback(async (values: Values) => {
    try {
      await resetPassword(values)
      setSuccess(true)
      formikRef.current?.resetForm()
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      toast.error(error.message)
    }
  }, [resetPassword])

  return <Container>
    <h1>Reset Password</h1>
    {success && <Alert>You will receive an email with instructions on how to reset your password shortly</Alert>}
    <ResetPasswordForm onSubmit={doResetPassword} ref={formikRef} />
    <hr />
    <p><NavLink to="login">Log in</NavLink> or <NavLink to="/signup">sign up</NavLink> instead</p>
  </Container>
}
