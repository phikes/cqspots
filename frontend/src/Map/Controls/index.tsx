import Button from "react-bootstrap/Button"
import { FaPlus } from "react-icons/fa"
import type { ControlsViewerFragment$key } from "./__generated__/ControlsViewerFragment.graphql"
import { graphql, useFragment } from "react-relay"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { useLogout } from "@/hooks/useLogout"
import { NavLink, useNavigate } from "react-router"

const viewerFragment = graphql`
fragment ControlsViewerFragment on User {
  callsign
  email
}
`

interface Props {
  viewerRef: ControlsViewerFragment$key | null | undefined
}

export const Controls = ({viewerRef}: Props) => {
  const logout = useLogout()
  const viewer = useFragment(viewerFragment, viewerRef)

  const doLogout = useCallback(async () => {
    if (!confirm("Are you sure you want to log out?")) return

    try {
      await logout()
      window.location.reload()
    } catch (error: any) {
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [])

  const navigate = useNavigate()
  const navigateLogin = useCallback(() => navigate("/login"), [])

  return <div className="leaflet-control-container">
    <div className="leaflet-top leaflet-right">
      <div className="d-flex gap-2 leaflet-control">
        <NavLink className="btn btn-primary btn-sm d-flex gap-1 align-items-center text-light" to="/user/spots/add"><FaPlus /> Add spot</NavLink>
        {viewer && <NavLink className="btn btn-primary btn-sm text-light" to="/user/spots">{viewer.callsign?.length ? viewer.callsign : viewer.email}</NavLink>}
        {viewer && <Button onClick={doLogout} size="sm" variant="outline-primary">Log out</Button>}
        {!viewer && <Button onClick={navigateLogin} size="sm" variant="outline-primary">Log in</Button>}
      </div>
    </div>
  </div>
}
