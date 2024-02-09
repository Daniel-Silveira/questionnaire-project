import { Input } from '@renderer/components/shared/Input'
import { useQuestionnaire, Question } from '@renderer/hooks/useQuestionnaire'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export const QuestionnaireDetails = () => {
  const { questionnaireDetails, handleSendResponses } = useQuestionnaire()

  const [data, setData] = useState<Question[]>([])

  const handleChangeResponse = (event: ChangeEvent<HTMLInputElement>, question: Question) => {
    const updatedData = questionnaireDetails.questions.map((item) =>
      item.id === question.id ? { ...question, response: event.target.value } : item
    )

    setData(updatedData)
  }

  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="text-sm">
        Voltar a tela anterior
      </Link>
      <h1 className="text-3xl font-bold">{questionnaireDetails.name}</h1>

      <div className="h-[70vh] overflow-auto mt-6">
        <h2 className="text-2xl font-bold">Perguntas</h2>
        <div className="grid gap-4 mt-4 ">
          {questionnaireDetails.questions?.map((question) => (
            <div key={question.id} className="border border-gray-600 p-4 rounded">
              <p className="text-lg font-bold">{question.description}</p>
              <Input
                placeholder="Sua resposta"
                value={question.response}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChangeResponse(event, question)
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handleSendResponses(data)}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Enviar respostas
        </button>
      </div>
    </div>
  )
}
