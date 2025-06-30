import Homepage from './homepage'
import LoginPage from './login'
import { useEffect, useState } from 'react'
import { useAuth } from '@/composables/useAuth' //todo

export default function IndexPage() {
  const { status } = useAuth()
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    //todo
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  if (loading) return <div>Загрузка...</div>

  return isAuthenticated ? <Homepage /> : <LoginPage />
}