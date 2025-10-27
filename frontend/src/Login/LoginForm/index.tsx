import { useLoading } from "@/hooks/useLoading"
import { LoadingButton } from "@/LoadingButton"
import { Field, Form, Formik } from "formik"
import { useId } from "react"
import BootstrapForm from "react-bootstrap/Form"

const INITIAL_VALUES: Values = {
  email: "",
  password: "",
  rememberMe: false
}

export type Values = {
  email: string,
  password: string,
  rememberMe: boolean
}

interface Props {
  onSubmit: (values: Values) => Promise<void>
}

export const LoginForm = ({onSubmit}: Props) => {
  const emailId = useId()
  const passwordId = useId()
  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  return <Formik initialValues={INITIAL_VALUES} onSubmit={loadingOnSubmit}>
    <Form>
      <BootstrapForm.Group className="mb-3" controlId={emailId}>
        <BootstrapForm.Label>Email</BootstrapForm.Label>
        <Field as={BootstrapForm.Control} name="email" />
      </BootstrapForm.Group>
      <BootstrapForm.Group className="mb-3" controlId={passwordId}>
        <BootstrapForm.Label>Password</BootstrapForm.Label>
        <Field as={BootstrapForm.Control} name="password" type="password" />
      </BootstrapForm.Group>
      <LoadingButton loading={loading} type="submit">Log in</LoadingButton>
    </Form>
  </Formik>
}
