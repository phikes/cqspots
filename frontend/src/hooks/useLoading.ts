import { useCallback, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLoading = <F extends (...args: P) => Promise<R>, P extends Array<any>, R>(fn: F): [boolean, (...args: P) => Promise<R>] => {
  const [loading, setLoading] = useState(false)

  return [
    loading,
    useCallback(async (...args: P): Promise<R> => {
      setLoading(true)
      try {
        return await fn(...args)
      } finally {
        setLoading(false)
      }
    }, [fn])
  ]
}
