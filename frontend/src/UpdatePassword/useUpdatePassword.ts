import { useCallback } from "react";

export const useUpdatePassword = () => useCallback(async ({ token, ...user }: {password: string, passwordConfirmation: string, token: string}) => {
  const response = await fetch("/users/password.json", {
    body: JSON.stringify({user: {...user, reset_password_token: token}}),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })

  if (response.status === 204) return

  const json = await response.json()

  if (json.error) throw new Error(json.error)
  if (json.errors) throw new Error("", {cause: json.errors})
}, [])
