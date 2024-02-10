import { useParams } from '../../../hooks/useParams'
import { Question, Response, useQuestionnaire } from '../../../hooks/useQuestionnaire'
import { Modal } from '../../Modal'
import { EmptyList } from './Empty'

type GroupedResponses = Record<string, Record<number, string>>

export const QuestionnairesDetails = () => {
  const { getDetailsById } = useQuestionnaire()
  const { setParams } = useParams()

  const data = getDetailsById()
  if (!data?.id) return null

  const { name, description, questions, responses } = getDetailsById()

  const groupedResponses: Record<string, Record<number, string>> = responses.reduce(
    (grouped: GroupedResponses, response: Response) => {
      const key = response.createdAt
      grouped[key] = grouped[key] || {}
      grouped[key][response.questionId] = response.description
      return grouped
    },
    {}
  )

  const hasQuestion = questions.length
  const isMultiplesQuestions = questions.length >= 8

  const handleOpenQuestionModal = () => {
    setParams('modal', 'question')
  }

  if (!hasQuestion) {
    return <EmptyList handleOpenQuestionModal={handleOpenQuestionModal} />
  }

  return (
    <>
      <Modal.Content>
        <div className="overflow-y-auto overflow-x-hidden min-w-[20vw] min-h-[20vh] max-h-[70vh]">
          <div>
            <h4 className="text-white text-xl font-semibold">{name}</h4>
            <p className="text-white">{description}</p>
          </div>
          <table
            className={`w-full text-sm text-left mt-4 text-gray-400 overflow-x-auto whitespace-nowrap ${
              isMultiplesQuestions && 'block'
            }`}
          >
            <thead className="text-xs uppercase bg-slate-900 text-gray-400">
              <tr>
                {questions.map((question: Question) => (
                  <th key={question.id} className="px-6 py-3">
                    {question.description}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedResponses).map(([createdAt, responsesByQuestion]) => (
                <tr
                  key={createdAt}
                  className="border-b bg-slate-800 border-gray-700 hover:bg-gray-600"
                >
                  {questions.map((question: Question) => (
                    <td
                      key={question.id}
                      className="px-6 py-2 text-xs whitespace-nowrap text-white"
                    >
                      {responsesByQuestion[question.id] && (
                        <div key={responsesByQuestion[question.id]}>
                          {responsesByQuestion[question.id]}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Content>
      <Modal.Footer textSaveButton="Criar nova pergunta" onSave={handleOpenQuestionModal} />
    </>
  )
}
