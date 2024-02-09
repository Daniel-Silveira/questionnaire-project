import api from '../api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from './useParams'

export const useUser = () => {
  const { removeParams } = useParams()

  const getUsers = async () => {
    try {
      const { data } = await api.get('/users')
      return data.users
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })

  const handleCreateUser = async (data: any) => {
    try {
      await api.post('/users', data)

      refetch()
      removeParams('modal')
    } catch (error) {
      console.log('error', error)
    }
  }

  return { data, handleCreateUser }
}
