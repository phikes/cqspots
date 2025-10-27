import { useCallback } from "react";

export const useSignup = () => useCallback(async (user: {callsign: string, email: string, password: string, passwordConfirmation: string}) => {
  const response = await fetch("/users.json", {
    body: JSON.stringify({user}),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  const json = await response.json()

  if (json.error) throw new Error(json.error)
  else if (json.errors) throw new Error("", {cause: json.errors})
}, [])
