import Container from "react-bootstrap/Container"
import { NavLink, useNavigate } from "react-router"
import { useUpdatePassword } from "./useUpdatePassword"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { UpdatePasswordForm, type Values } from "./UpdatePasswordForm"
import { getErrorMessage } from "@/utils/getErrorMessage"

export const UpdatePassword = () => {
  const updatePassword = useUpdatePassword()
  const navigate = useNavigate()

  const doUpdatePassword = useCallback(async (values: Values) => {
    try {
      await updatePassword(values)
      toast.success("Your password was successfully reset. You can now log in.")
      navigate("/login")
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      if (error.message) toast.error(error.message)
      else if(error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [navigate, updatePassword])

  return <Container>
    <h1>Update password</h1>
    <UpdatePasswordForm onSubmit={doUpdatePassword} />
    <hr />
    <p><NavLink to="login">Log in</NavLink> or <NavLink to="/signup">sign up</NavLink> instead</p>
  </Container>
}
