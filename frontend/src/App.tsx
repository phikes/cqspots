import { loadQuery, RelayEnvironmentProvider } from "react-relay"
import { Map, MapQuery } from "@/Map"
import { environment } from "@/relay/environment"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./bootstrap.scss"
import "./leaflet.scss"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Map,
    index: true,
    loader: async () => loadQuery(environment, MapQuery, {})
  },
])

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  )
}
