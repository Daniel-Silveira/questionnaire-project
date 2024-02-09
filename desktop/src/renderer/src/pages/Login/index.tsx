import { Input } from '@renderer/components/shared/Input'
import { useAuth } from '@renderer/hooks/useAuth'
import { ChangeEvent, useState } from 'react'

export const Login = () => {
  const { error, handleLogin } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
        <div className="grid gap-4">
          <Input
            label="E-mail"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <Input
            label="Senha"
            type="password"
            value={form.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, password: event.target.value }))
            }
          />
          {error && <span className="text-red-600 text-center">{error}</span>}
          <button
            onClick={() => handleLogin(form)}
            className="py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}
