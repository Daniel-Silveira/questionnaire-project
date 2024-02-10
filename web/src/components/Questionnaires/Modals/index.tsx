import { useParams } from '../../../hooks/useParams'
import { Modal } from '../../Modal'
import { QuestionForm } from '../../Question/Form'
import { QuestionnairesDetails } from '../Details'
import { QuestionnairesForm } from '../Form'

export const Modals = () => {
  const { getParams } = useParams()
  const isOpenQuestionnaireModal = getParams('modal') === 'questionnaires'
  const isOpenQuestionnaireDetailModal = getParams('modal') === 'questionnaireDetail'
  const isOpenQuestionModal = getParams('modal') === 'question'

  return (
    <>
      <Modal.Root isOpen={isOpenQuestionnaireModal}>
        <Modal.Header title="Novo questionário" />
        <QuestionnairesForm />
      </Modal.Root>
      <Modal.Root isOpen={isOpenQuestionModal}>
        <Modal.Header title="Nova pergunta" />
        <QuestionForm />
      </Modal.Root>
      <Modal.Root isOpen={isOpenQuestionnaireDetailModal} width="w-8/12">
        <Modal.Header title="Detalhes" />
        <QuestionnairesDetails />
      </Modal.Root>
    </>
  )
}
