import api from '@renderer/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const { data: response } = await api.post('/auth', data)
      if (!!response.user?.id) {
        navigate('/')
      }
    } catch (error) {
      setError('E-mail ou senha incorretos')
    }
  }

  return {
    error,
    handleLogin
  }
}
