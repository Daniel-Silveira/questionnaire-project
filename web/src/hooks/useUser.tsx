import api from '../api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from './useParams'
import { useState } from 'react'

export const useUser = () => {
  const { removeParams } = useParams()
  const [error, setError] = useState('')

  const getUsers = async () => {
    try {
      const { data } = await api.get('/users?limit=50')
      return data.users
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })

  const handleCreateUser = async (data: { name: string; email: string; password: string }) => {
    try {
      await api.post('/auth/register', data)

      refetch()
      removeParams('modal')
    } catch (error) {
      setError('E-mail já cadastrado')
    }
  }

  return { data, error, handleCreateUser }
}
