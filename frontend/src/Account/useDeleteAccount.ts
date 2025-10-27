import { useCallback } from "react"

export const useDeleteAccount = () => useCallback(async () => {
  const response = await fetch("/users.json", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })

  if (response.status === 204) return

  const json = await response.json()

  if (json.error) throw new Error(json.error)
  else if (json.errors) throw new Error("", {cause: json.errors})
}, [])
