import { graphql, useFragment } from "react-relay"
import { UpdateUserForm, type Values } from "./UpdateUserForm"
import type { UpdateUserViewerFragment$key } from "./__generated__/UpdateUserViewerFragment.graphql"
import toast from "react-hot-toast"
import { useCallback } from "react"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { useUpdateUser } from "./useUpdateUser"

const viewerFragment = graphql`
fragment UpdateUserViewerFragment on User {
  ...UpdateUserFormViewerFragment
}
`

interface Props {
  viewerRef: UpdateUserViewerFragment$key
}

export const UpdateUser = ({viewerRef}: Props) => {
  const updateUser = useUpdateUser()
  const viewer = useFragment(viewerFragment, viewerRef)

  const doUpdateUser = useCallback(async (values: Values) => {
    try {
      await updateUser(values)
      window.location.reload()
    } catch (error: any) {
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [updateUser])


  return <div className="mb-3">
    <h1 className="h4">Update email/callsign</h1>
    <UpdateUserForm onSubmit={doUpdateUser} viewerRef={viewer} />
  </div>
}
