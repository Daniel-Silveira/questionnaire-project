import { FiList, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
            >
              <FiUsers size="1.25rem" />
              <span className="flex-1 ms-3 whitespace-nowrap">Usuários</span>
            </Link>
            <Link
              to="/questionnaires"
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
            >
              <FiList size="1.25rem" />
              <span className="flex-1 ms-3 whitespace-nowrap">Questionários</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
