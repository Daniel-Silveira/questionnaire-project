import api from '../api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from './useParams'

export type Response = {
  description: string
  questionId: number
  createdAt: string
}

export type Question = {
  id: number
  description: string
}

export const useQuestionnaire = () => {
  const { getParams, removeParams } = useParams()

  const getQuestionnaires = async () => {
    try {
      const { data } = await api.get('/questionnaires?limit=50')
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

  const getDetailsById = () => {
    const questionnaire = data?.find(
      (item: Question) => String(item.id) === getParams('questionnaire')
    )
    return questionnaire
  }

  return { data, handleCreate, getDetailsById }
}
