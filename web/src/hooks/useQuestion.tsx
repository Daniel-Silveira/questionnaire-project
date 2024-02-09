import api from '../api'
import { queryClient } from '../lib/react-query'
import { useParams } from './useParams'

export const useQuestion = () => {
  const { getParams, removeParams } = useParams()

  const handleCreate = async (data: { description: string }) => {
    try {
      await api.post('/question', { ...data, questionnaireId: getParams('questionnaire') })

      cleanQueries()
    } catch (error) {
      console.log('error', error)
    }
  }

  const cleanQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['questionnaires'] })
    removeParams('modal')
    removeParams('questionnaire')
  }

  return { handleCreate }
}
