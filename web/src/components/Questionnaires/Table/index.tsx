import { useParams } from '../../../hooks/useParams'
import { formatDate } from '../../../utils/Date'

type QuestionnairesTableProps = {
  data: {
    id: string
    name: string
    description: string
    questions: []
    responses: []
    createdAt: string
  }[]
}

export const QuestionnairesTable = ({ data }: QuestionnairesTableProps) => {
  const { setParams } = useParams()

  const handleOpenQuestionModal = (id: string) => {
    setParams('modal', 'question')
    setParams('questionnaire', id)
  }

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nome
          </th>
          <th scope="col" className="px-6 py-3">
            Descrição
          </th>
          <th scope="col" className="px-6 py-3">
            Perguntas
          </th>
          <th scope="col" className="px-6 py-3">
            Respostas
          </th>
          <th scope="col" className="px-6 py-3">
            Criado em
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            onClick={() => handleOpenQuestionModal(item.id)}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.name}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.description}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.questions?.length || 0}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.responses?.length || 0}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {formatDate(item.createdAt)}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
