import { useCallback } from "react";

export const useLogin = () => useCallback(async (user: {email: string, password: string, rememberMe: boolean}) => {
  const response = await fetch("/users/sign_in.json", {
    body: JSON.stringify({user}),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  const json = await response.json()

  if (json.error) throw new Error(json.error)
}, [])
