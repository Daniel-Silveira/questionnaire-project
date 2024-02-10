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
    setParams('modal', 'questionnaireDetail')
    setParams('questionnaire', id)
  }

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
      <thead className="text-xs uppercase bg-gray-700 text-gray-400">
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
            className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
            onClick={() => handleOpenQuestionModal(item.id)}
          >
            <Th text={item.name} />
            <Th text={item.description} />
            <Th text={item.questions?.length || '0'} />
            <Th text={item.responses?.length || '0'} />
            <Th text={formatDate(item.createdAt)} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Th = ({ text }: { text: string }) => (
  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white cursor-pointer">
    {text}
  </th>
)
