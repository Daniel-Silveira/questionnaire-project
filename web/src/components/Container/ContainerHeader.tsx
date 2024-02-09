type ContainerHeaderProps = {
  title: string
  textButton: string
  onClick: () => void
}

export const ContainerHeader = ({ title, textButton, onClick }: ContainerHeaderProps) => {
  return (
    <div className="p-4 rounded-lg bg-gray-800 flex justify-between items-center">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      <button
        type="button"
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  )
}
