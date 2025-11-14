import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import { NavLink } from "react-router"
import { SignupForm, type Values } from "./SignupForm"
import { useSignup } from "./useSignup"
import { useCallback, useRef, useState } from "react"
import toast from "react-hot-toast"
import { getErrorMessage } from "@/utils/getErrorMessage"
import type { FormikProps } from "formik"

export const Signup = () => {
  const formikRef = useRef<FormikProps<Values>>(null)
  const signup = useSignup()
  const [success, setSuccess] = useState(false)

  const doSignup = useCallback(async (values: Values) => {
    try {
      await signup(values)
      formikRef.current?.resetForm()
      setSuccess(true)
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [signup])

  return <Container>
    <h1>Sign Up</h1>
    {success && <Alert>Thank you for signing up! We have sent you an email to confirm your account</Alert>}
    <SignupForm onSubmit={doSignup} ref={formikRef} />
    <hr />
    <p>Already have an account? <NavLink to="/login">Log in</NavLink> instead</p>
  </Container>
}
