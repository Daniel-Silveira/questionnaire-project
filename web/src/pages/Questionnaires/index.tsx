import { Container } from '../../components/Container'
import { QuestionnairesForm } from '../../components/Questionnaires/Form'
import { QuestionnairesTable } from '../../components/Questionnaires/Table'
import { useQuestionnaire } from '../../hooks/useQuestionnaire'
import { Modal } from '../../components/Modal'
import { useParams } from '../../hooks/useParams'
import { QuestionForm } from '../../components/Question/Form'

export const Questionnaires = () => {
  const { data, handleCreate } = useQuestionnaire()
  const { getParams, setParams } = useParams()
  const isOpenQuestionnaireModal = getParams('modal') === 'questionnaires'
  const isOpenQuestionModal = getParams('modal') === 'question'

  const handleOpenQuestionnairesModal = () => setParams('modal', 'questionnaires')

  return (
    <>
      <Modal.Root isOpen={isOpenQuestionnaireModal}>
        <Modal.Header title="Novo questionário" />
        <QuestionnairesForm handleCreate={handleCreate} />
      </Modal.Root>
      <Modal.Root isOpen={isOpenQuestionModal}>
        <Modal.Header title="Nova pergunta" />
        <QuestionForm />
      </Modal.Root>
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
