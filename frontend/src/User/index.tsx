import Container from "react-bootstrap/Container"
import { graphql, useFragment, usePreloadedQuery } from "react-relay"
import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router"
import { type UserQuery } from "./__generated__/UserQuery.graphql"
import { type UserViewerFragment$key } from "./__generated__/UserViewerFragment.graphql"
import toast from "react-hot-toast"
import { useCallback, useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import { useLogout } from "@/hooks/useLogout"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { FaArrowLeft } from "react-icons/fa"

export const query = graphql`
query UserQuery {
  viewer {
    ...UserViewerFragment
  }
}
`

const viewerFragment = graphql`
fragment UserViewerFragment on User {
  callsign
  email
}
`

export const User = () => {
  const logout = useLogout()
  const queryRef = usePreloadedQuery<UserQuery>(query, useLoaderData())
  const viewer = useFragment<UserViewerFragment$key>(viewerFragment, queryRef.viewer)

  const navigate = useNavigate()
  useEffect(() => {
    if (!viewer) {
      toast.success("You need to be logged in in order to view this page")
      navigate("/login")
    }
  }, [viewer])

  const doLogout = useCallback(async () => {
    if (!confirm("Are you sure you want to log out?")) return

    try {
      await logout()
      window.location.assign("/")
    } catch (error: any) {
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [logout])

  if (!viewer) return

  return <Container>
    <h1>Welcome, {viewer.callsign?.length ? viewer.callsign : viewer.email}</h1>
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link className="d-flex align-items-center gap-2" as={NavLink} to="/"><FaArrowLeft />{" "}Map</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/user/spots">Spots</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/user/account">Account</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-auto">
        <Nav.Link onClick={doLogout}>
          Log out
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <main className="p-3">
      <Outlet />
    </main>
  </Container>
}
