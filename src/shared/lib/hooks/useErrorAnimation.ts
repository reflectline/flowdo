import { useCallback, useState } from 'react'

export const useErrorAnimation = () => {
  const [error, setError] = useState<boolean>(false)

  const start = useCallback(() => {
    setError(false)
    requestAnimationFrame(() => setError(true))
  }, [])

  const stop = useCallback(() => {
    setError(false)
  }, [])

  return {
    error,
    startShowError: start,
    stopShowError: stop,
  }
}