import { Login } from '@renderer/pages/Login'
import { Routes, Route, MemoryRouter } from 'react-router-dom'
import { Questionnaires } from './pages/Questionnaires'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { QuestionnaireDetails } from './pages/QuestionnaireDetails'

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/auth']}>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Questionnaires />} />
          <Route path="/:id" element={<QuestionnaireDetails />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )
}

export default App
