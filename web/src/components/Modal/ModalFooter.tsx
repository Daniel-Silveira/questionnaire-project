import { useParams } from '../../hooks/useParams'

type ModalFooterProps = {
  onSave?: () => void
}

export const ModalFooter = ({ onSave }: ModalFooterProps) => {
  const { removeParams } = useParams()

  const handleCloseModal = () => removeParams('modal')
  return (
    <div className="flex items-center justify-center p-4 md:p-5 border-t rounded-b border-gray-600 gap-3">
      <button
        type="button"
        className=" focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
        onClick={handleCloseModal}
      >
        Voltar
      </button>
      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        onClick={onSave}
      >
        Salvar
      </button>
    </div>
  )
}
