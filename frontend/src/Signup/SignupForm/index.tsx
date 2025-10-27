import { useLoading } from "@/hooks/useLoading"
import { LoadingButton } from "@/LoadingButton"
import { Field, Form, Formik, type FormikProps } from "formik"
import { useId, type Ref } from "react"
import BootstrapForm from "react-bootstrap/Form"
import { object, ref, string } from "yup"

const validationSchema = object({
  callsign: string(),
  email: string().email("Email must be a valid email address").required("Email is required"),
  password: string().min(8, "Please enter at least ${min} characters").required("Please enter a password"),
  passwordConfirmation: string().required("Please repeat your password").oneOf([ref('password')], "Passwords don't match")
})

const INITIAL_VALUES: Values = {
  callsign: "",
  email: "",
  password: "",
  passwordConfirmation: "",
}

export type Values = {
  callsign: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

interface Props {
  onSubmit: (values: Values) => Promise<void>
  ref?: Ref<FormikProps<Values>>
}

export const SignupForm = ({onSubmit, ref}: Props) => {
  const callsignId = useId()
  const emailId = useId()
  const passwordId = useId()
  const passwordConfirmationId = useId()
  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  return <Formik initialValues={INITIAL_VALUES} onSubmit={loadingOnSubmit} innerRef={ref} validationSchema={validationSchema}>
    {
      ({ errors }) =><Form>
        <BootstrapForm.Group className="mb-3" controlId={emailId}>
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.email} name="email" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId={callsignId}>
          <BootstrapForm.Label>Callsign (optional)</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.callsign} name="callsign" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.callsign}</BootstrapForm.Control.Feedback>
          <BootstrapForm.Text>Used to link to your QRZ.com page on spots you add</BootstrapForm.Text>
        </BootstrapForm.Group>
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
        <LoadingButton loading={loading} type="submit">Sign up</LoadingButton>
      </Form>
    }
  </Formik>
}
