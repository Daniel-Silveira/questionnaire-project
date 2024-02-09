import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../shared/Input'
import { Modal } from '../../Modal'
import { useQuestion } from '../../../hooks/useQuestion'

type Inputs = {
  description: string
  response: string
}

export const QuestionForm = () => {
  const { handleCreate } = useQuestion()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => handleCreate(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Content>
        <Input label="Pergunta" {...register('description')} />
        <Input label="Resposta" {...register('response')} />
      </Modal.Content>
      <Modal.Footer />
    </form>
  )
}
