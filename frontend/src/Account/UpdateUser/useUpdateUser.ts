import { useCallback } from "react";

export const useUpdateUser = () => useCallback(async ({ currentPassword, ...user }: {callsign: string | null | undefined, currentPassword: string, email: string}) => {
  const response = await fetch("/users.json", {
    body: JSON.stringify({user: {...user, current_password: currentPassword}}),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })

  if (response.status === 204) return

  const json = await response.json()

  if (json.error) throw new Error(json.error)
  else if (json.errors) throw new Error("", {cause: json.errors})
}, [])
