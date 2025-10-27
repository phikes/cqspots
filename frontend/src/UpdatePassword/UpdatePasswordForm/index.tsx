import { useLoading } from "@/hooks/useLoading"
import { LoadingButton } from "@/LoadingButton"
import { Field, Form, Formik } from "formik"
import { useEffect, useId, useMemo } from "react"
import BootstrapForm from "react-bootstrap/Form"
import toast from "react-hot-toast"
import { useNavigate, useSearchParams } from "react-router"
import { object, ref, string } from "yup"

const TOKEN_KEY = "token"

const validationSchema = object({
  password: string().min(8, "Please enter at least ${min} characters").required("Please enter a password"),
  passwordConfirmation: string().required("Please repeat your password").oneOf([ref('password')], "Passwords don't match"),
  token: string().required()
})

export type Values = {
  password: string,
  passwordConfirmation: string,
  token: string
}

interface Props {
  onSubmit: (values: Values) => Promise<void>
}

export const UpdatePasswordForm = ({onSubmit}: Props) => {
  const navigate = useNavigate()
  const passwordId = useId()
  const passwordConfirmationId = useId()
  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  const [searchParams] = useSearchParams()

  const initialValues: Values = useMemo(() => ({
    password: "",
    passwordConfirmation: "",
    token: searchParams.get("token")!
  }), [searchParams])

  useEffect(() => {
    if (searchParams.has(TOKEN_KEY)) return

    toast("Missing token")
    navigate("/login")
  }, [searchParams])

  return <Formik initialValues={initialValues} onSubmit={loadingOnSubmit} validationSchema={validationSchema}>
    {
      ({errors}) => <Form>
        <BootstrapForm.Group className="mb-3" controlId={passwordId}>
          <BootstrapForm.Label>Password</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.password} name="password" type="password" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.password}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId={passwordConfirmationId}>
          <BootstrapForm.Label>Password Confirmation</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.passwordConfirmation} name="passwordConfirmation" type="password" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.passwordConfirmation}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <LoadingButton loading={loading} type="submit">Update password</LoadingButton>
      </Form>
    }
  </Formik>
}
