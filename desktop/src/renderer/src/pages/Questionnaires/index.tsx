import { ListAll } from '@renderer/components/Questionnaires/ListAll'
import { useQuestionnaire } from '@renderer/hooks/useQuestionnaire'

export const Questionnaires = () => {
  const { data } = useQuestionnaire()

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Questionários</h1>
      <ListAll data={data} />
    </div>
  )
}
