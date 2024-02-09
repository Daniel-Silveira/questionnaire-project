import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../shared/Input'
import { Modal } from '../../Modal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type UserFormProps = {
  errorMessage?: string
  handleCreateUser: (data: Inputs) => void
}

export const UserForm = ({ errorMessage, handleCreateUser }: UserFormProps) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem coincidir')
      .required('Campo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<Inputs> = data => handleCreateUser(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Content>
        <Input
          label="Nome"
          placeholder="Ex: João Silva"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="E-mail"
          placeholder="Ex: seuemail@gmail.com"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Senha"
            type="password"
            errorMessage={errors.password?.message}
            {...register('password')}
          />
          <Input
            label="Confirme a senha"
            type="password"
            errorMessage={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </div>
        {errorMessage && <p className="text-red-500 text-center font-bold">{errorMessage}</p>}
      </Modal.Content>
      <Modal.Footer />
    </form>
  )
}
