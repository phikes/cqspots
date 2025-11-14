import { getErrorMessage } from "@/utils/getErrorMessage"
import { useCallback } from "react"
import Button from "react-bootstrap/Button"
import toast from "react-hot-toast"
import { useDeleteAccount } from "./useDeleteAccount"
import { UpdateUser } from "./UpdateUser"
import { graphql } from "relay-runtime"
import { usePreloadedQuery } from "react-relay"
import type { AccountQuery } from "./__generated__/AccountQuery.graphql"
import { useLoaderData } from "react-router"

export const query = graphql`
query AccountQuery {
  viewer {
    ...UpdateUserViewerFragment
  }
}
`

export const Account = () => {
  const queryRef = usePreloadedQuery<AccountQuery>(query, useLoaderData())
  const deleteAccount = useDeleteAccount()
  const doDeleteAccount = useCallback(async () => {
    if (!confirm("Are you sure you want to delete your account? All your spots will be deleted as well.")) return

    try {
      await deleteAccount()
      window.location.assign("/")
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [deleteAccount])

  return <>
  <UpdateUser viewerRef={queryRef.viewer!} />
  <hr />
  <Button onClick={doDeleteAccount} variant="danger">Delete account...</Button>
</>
}
