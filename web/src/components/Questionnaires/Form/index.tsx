import { useQuestionnaire } from '../../../hooks/useQuestionnaire'
import { Modal } from '../../Modal'
import { Input } from '../../shared/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  description: string
}

export const QuestionnairesForm = () => {
  const { handleCreate } = useQuestionnaire()

  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => handleCreate(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Content>
        <div>
          <Input label="Nome" {...register('name')} />
          <Input label="Descrição" {...register('description')} />
        </div>
      </Modal.Content>
      <Modal.Footer />
    </form>
  )
}
