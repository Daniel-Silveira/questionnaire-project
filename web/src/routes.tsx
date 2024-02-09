import { createBrowserRouter } from 'react-router-dom'
import { Users } from './pages/Users'
import App from './App'
import { Questionnaires } from './pages/Questionnaires'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Página não encontrada</p>,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: '/questionnaires',
        element: <Questionnaires />,
      },
    ],
  },
])
