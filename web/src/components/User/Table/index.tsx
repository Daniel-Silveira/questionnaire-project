import { formatDate } from '../../../utils/Date'

type UserTableProps = {
  data: {
    id: number
    name: string
    email: string
    createdAt: string
  }[]
}

export const UserTable = ({ data }: UserTableProps) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nome
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Criado em
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.name}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.email}
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {formatDate(item.createdAt)}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
