import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth(redirectTo: string = '/') {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace(redirectTo)
      return
    }

    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router, redirectTo])

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    router.replace(redirectTo)
  }

  return {
    isAuthenticated,
    isLoading,
    logout
  }
}
