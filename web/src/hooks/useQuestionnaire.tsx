import api from '../api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from './useParams'

export const useQuestionnaire = () => {
  const { removeParams } = useParams()

  const getQuestionnaires = async () => {
    try {
      const { data } = await api.get('/questionnaires')
      return data?.questionnaires
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, refetch } = useQuery({
    queryKey: ['questionnaires'],
    queryFn: () => getQuestionnaires(),
  })

  const handleCreate = async (data: { name: string; description: string }) => {
    try {
      await api.post('/questionnaires', data)

      refetch()
      removeParams('modal')
    } catch (error) {
      console.log('error', error)
    }
  }

  return { data, handleCreate }
}
