import { useLoading } from "@/hooks/useLoading"
import { LoadingButton } from "@/LoadingButton"
import { Field, Form, Formik, type FormikProps } from "formik"
import { useId, type Ref } from "react"
import BootstrapForm from "react-bootstrap/Form"
import { object, string } from "yup"

const validationSchema = object({
  email: string().email("Email must be a valid email address").required("Email is required"),
})

const INITIAL_VALUES: Values = {
  email: "",
}

export type Values = {
  email: string,
}

interface Props {
  onSubmit: (values: Values) => Promise<void>
  ref: Ref<FormikProps<Values>>
}

export const ResetPasswordForm = ({onSubmit, ref}: Props) => {
  const emailId = useId()
  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  return <Formik initialValues={INITIAL_VALUES} innerRef={ref} onSubmit={loadingOnSubmit} validationSchema={validationSchema}>
    {
      ({ errors }) => <Form>
        <BootstrapForm.Group className="mb-3" controlId={emailId}>
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.email} name="email" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
      <LoadingButton loading={loading} type="submit">Reset password</LoadingButton>
    </Form>
    }
  </Formik>
}
