import { getErrorMessage } from "@/utils/getErrorMessage"
import { useCallback } from "react"
import Button from "react-bootstrap/Button"
import toast from "react-hot-toast"
import { useDeleteAccount } from "./useDeleteAccount"

export const Account = () => {
  const deleteAccount = useDeleteAccount()
  const doDeleteAccount = useCallback(async () => {
    if (!confirm("Are you sure you want to delete your account? All your spots will be deleted as well.")) return

    try {
      await deleteAccount()
      window.location.assign("/")
    } catch (error: any) {
      if (error.message) toast.error(error.message)
      else if (error.cause) toast.error(getErrorMessage(error.cause))
    }
  }, [deleteAccount])

  return <>
  <Button onClick={doDeleteAccount} variant="danger">Delete account...</Button>
</>
}
