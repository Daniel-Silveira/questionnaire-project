import { useParams } from '../../../hooks/useParams'
import { useQuestionnaire } from '../../../hooks/useQuestionnaire'
import { Modal } from '../../Modal'
import { QuestionForm } from '../../Question/Form'
import { QuestionnairesForm } from '../Form'

export const Modals = () => {
  const { handleCreate } = useQuestionnaire()

  const { getParams } = useParams()
  const isOpenQuestionnaireModal = getParams('modal') === 'questionnaires'
  const isOpenQuestionModal = getParams('modal') === 'question'
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
    </>
  )
}
