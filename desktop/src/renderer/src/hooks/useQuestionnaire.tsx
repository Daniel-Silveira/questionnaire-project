import { useEffect, useState } from 'react'
import api from '../api'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

export type Question = { id: string; description: string; response: string }

type Questionnaire = {
  id: string
  name: string
  description: string

  questions: Question[]
}

export const useQuestionnaire = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [questionnaireDetails, setQuestionnaireDetails] = useState<Questionnaire>({
    id: '',
    name: '',
    description: '',
    questions: []
  })

  const getAllQuestionnaires = async () => {
    try {
      const { data } = await api.get('/questionnaires')
      return data.questionnaires
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data } = useQuery({
    queryKey: ['questionnaires'],
    queryFn: () => getAllQuestionnaires()
  })

  const getQuestionnaire = async (id: string) => {
    try {
      const { data } = await api.get(`/questionnaires/${id}`)
      setQuestionnaireDetails(data.questionnaire)
    } catch (error) {
      alert('Ocorreu um erro ao buscar seu questionario')
    }
  }

  const handleSendResponses = async () => {
    const data = questionnaireDetails.questions?.map((item) => ({
      description: item.response,
      questionId: Number(item.id),
      questionnaireId: Number(params.id)
    }))

    try {
      await api.post('/responses', data)
      navigate('/')
    } catch (error) {
      alert('Ocorreu um erro ao salvar suas respostas')
    }
  }

  useEffect(() => {
    if (params.id) {
      getQuestionnaire(params.id)
    }
  }, [params])

  return {
    data,
    questionnaireDetails,
    getQuestionnaire,
    handleSendResponses,
    setQuestionnaireDetails
  }
}
