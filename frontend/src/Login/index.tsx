import Container from "react-bootstrap/Container"
import { NavLink, useNavigate } from "react-router"
import { LoginForm, type Values } from "./LoginForm"
import { useLogin } from "./useLogin"
import { useCallback } from "react"
import toast from "react-hot-toast"

export const Login = () => {
  const login = useLogin()
  const navigate = useNavigate()

  const doLogin = useCallback(async (values: Values) => {
    try {
      await login(values)
      navigate("/user/spots")
    } catch (error: any) {
      toast.error(error.message)
    }
  }, [login])

  return <Container>
    <h1>Log In</h1>
    <LoginForm onSubmit={doLogin} />
    <hr />
    <p>No account yet? <NavLink to="/signup">Sign up</NavLink> instead</p>
    <p>Forgot your password? <NavLink to="/resetpassword">Reset password</NavLink></p>
  </Container>
}
