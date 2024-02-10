import { Modal } from '../../Modal'

export const EmptyList = ({ handleOpenQuestionModal }: { handleOpenQuestionModal: () => void }) => {
  return (
    <Modal.Content>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-white text-lg text-center">
          Você ainda não tem nenhuma pergunta cadastrada nesse questionário
        </h4>
        <button
          type="button"
          className="text-white mt-6 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
          onClick={handleOpenQuestionModal}
        >
          Criar pergunta
        </button>
      </div>
    </Modal.Content>
  )
}
