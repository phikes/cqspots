import { loadQuery, RelayEnvironmentProvider } from "react-relay"
import { Map, query as mapQuery } from "@/Map"
import { environment } from "@/relay/environment"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./bootstrap.scss"
import "./leaflet.scss"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { Toaster } from "@/Toaster"
import { ResetPassword } from "./ResetPassword"
import { UpdatePassword } from "./UpdatePassword"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Map,
    loader: async () => loadQuery(environment, mapQuery, {})
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/signup",
    Component: Signup
  },
  {
    path: "/resetpassword",
    Component: ResetPassword
  },
  {
    path: "/updatepassword",
    Component: UpdatePassword
  },
])

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Toaster />
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  )
}
