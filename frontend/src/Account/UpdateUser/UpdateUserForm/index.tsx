import { useMemo } from "react"
import { useLoading } from "@/hooks/useLoading"
import { LoadingButton } from "@/LoadingButton"
import { Field, Form, Formik } from "formik"
import { useId } from "react"
import BootstrapForm from "react-bootstrap/Form"
import { graphql } from "relay-runtime"
import type { UpdateUserFormViewerFragment$key } from "./__generated__/UpdateUserFormViewerFragment.graphql"
import { useFragment } from "react-relay"
import { object, string } from "yup"

const validationSchema = object({
  callsign: string(),
  email: string().email("Email must be a valid email address").required("Email is required"),
  currentPassword: string().required("Current password is required")
})

const viewerFragment = graphql`
fragment UpdateUserFormViewerFragment on User {
  callsign
  email
  unconfirmedEmail
}
`

export type Values = {
  callsign: string | null | undefined
  email: string
  currentPassword: string
}

interface Props {
  onSubmit: (values: Values) => Promise<void>
  viewerRef: UpdateUserFormViewerFragment$key
}

export const UpdateUserForm = ({onSubmit, viewerRef}: Props) => {
  const viewer = useFragment(viewerFragment, viewerRef)

  const emailId = useId()
  const callsignId = useId()
  const currentPasswordId = useId()

  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  const initialValues: Values = useMemo(() => ({
    callsign: viewer.callsign ?? "",
    email: viewer.email,
    currentPassword: ""
  }), [viewer])

  return <Formik initialValues={initialValues} onSubmit={loadingOnSubmit} validationSchema={validationSchema}>
    {
      ({errors}) => <Form>
        <BootstrapForm.Group className="mb-3" controlId={emailId}>
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.email} name="email" />
          {viewer.unconfirmedEmail && <BootstrapForm.Text>We have sent an email to <b>{viewer.unconfirmedEmail}</b> for confirmation</BootstrapForm.Text>}
          <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId={callsignId}>
          <BootstrapForm.Label>Callsign</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.callsign} name="callsign" />
          <BootstrapForm.Text>Used to link to your QRZ.com page on spots you add</BootstrapForm.Text>
          <BootstrapForm.Control.Feedback type="invalid">{errors.callsign}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId={currentPasswordId}>
          <BootstrapForm.Label>Current Password</BootstrapForm.Label>
          <Field as={BootstrapForm.Control} isInvalid={errors.currentPassword} name="currentPassword" type="password" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.currentPassword}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <LoadingButton loading={loading} type="submit">Update</LoadingButton>
      </Form>
    }
  </Formik>
}
