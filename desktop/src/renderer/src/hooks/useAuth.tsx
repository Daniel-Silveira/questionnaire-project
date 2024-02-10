import api from '@renderer/api'
import { useState } from 'react'

export const useAuth = () => {
  const token = sessionStorage.getItem('authToken')
  const [isLogged, setIsLogged] = useState(!!token)
  const [error, setError] = useState('')

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const { data: response } = await api.post('/auth', data)
      if (!!response.user?.id) {
        setIsLogged(response.token)
        sessionStorage.setItem('authToken', response.token)
      }
    } catch (error) {
      setError('E-mail ou senha incorretos')
    }
  }

  return {
    error,
    isLogged,
    handleLogin
  }
}
