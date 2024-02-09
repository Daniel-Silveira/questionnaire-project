import { FiX } from 'react-icons/fi'
import { useParams } from '../../hooks/useParams'

type ModalHeaderProps = {
  title: string
}

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  const { removeParams } = useParams()

  const handleCloseModal = () => removeParams('modal')
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="default-modal"
        onClick={handleCloseModal}
      >
        <FiX />
      </button>
    </div>
  )
}
