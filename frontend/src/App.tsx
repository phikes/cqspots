import { loadQuery, RelayEnvironmentProvider } from "react-relay"
import { Map, MapQuery } from "@/Map"
import { environment } from "@/relay/environment"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./bootstrap.scss"
import "./leaflet.scss"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { Toaster } from "@/Toaster"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Map,
    loader: async () => loadQuery(environment, MapQuery, {})
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/signup",
    Component: Signup
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
