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
import { User, query as userQuery } from "./User"
import { Account, query as accountQuery } from "./Account"
import { Spots, query as spotsQuery } from "./Spots"
import { AddSpot } from "@/AddSpot"
import { EditSpot, query as EditSpotQuery } from "./EditSpot"
import L from "leaflet"

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

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
  {
    path: "/user",
    id: "user",
    Component: User,
    loader: async () => loadQuery(environment, userQuery, {}),
      children: [
      {
        path: "/user/spots/add",
        Component: AddSpot,
      },
      {
        path: "/user/spots/:id",
        Component: EditSpot,
        loader: async ({ params: {id} }) => loadQuery(environment, EditSpotQuery, {id}),
      },
        {
          path: "/user/spots",
          Component: Spots,
          loader: async () => loadQuery(environment, spotsQuery, {}),
        },
          {
            path: "/user/account",
            Component: Account,
            loader: async () => loadQuery(environment, accountQuery, {}),
          }
    ]
  }
])

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Toaster />
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  )
}
