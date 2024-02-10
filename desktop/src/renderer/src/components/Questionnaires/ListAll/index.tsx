import { useNavigate } from 'react-router-dom'

type ListAllProps = {
  data: {
    id: string
    name: string
    description: string
  }[]
}

export const ListAll = ({ data }: ListAllProps) => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 gap-4 p-4 ">
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          onClick={() => navigate(`/${item.id}`)}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-white">{item.name}</h2>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
