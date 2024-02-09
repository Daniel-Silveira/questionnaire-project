import { Sidebar } from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-slate-600 h-dvh">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
