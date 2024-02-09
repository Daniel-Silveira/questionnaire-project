import { Container } from '../../components/Container'
import { QuestionnairesTable } from '../../components/Questionnaires/Table'
import { useQuestionnaire } from '../../hooks/useQuestionnaire'
import { useParams } from '../../hooks/useParams'
import { Modals } from '../../components/Questionnaires/Modals'

export const Questionnaires = () => {
  const { data } = useQuestionnaire()
  const { setParams } = useParams()

  const handleOpenQuestionnairesModal = () => setParams('modal', 'questionnaires')

  return (
    <>
      <Modals />
      <Container.Root>
        <Container.Header
          title="Questionários"
          textButton="Novo questionário"
          onClick={handleOpenQuestionnairesModal}
        />
        <Container.Content>
          <QuestionnairesTable data={data} />
        </Container.Content>
      </Container.Root>
    </>
  )
}
