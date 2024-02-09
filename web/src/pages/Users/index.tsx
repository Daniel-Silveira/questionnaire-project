import { Container } from '../../components/Container'
import { Modal } from '../../components/Modal'
import { UserForm } from '../../components/User/Form'
import { UserTable } from '../../components/User/Table'
import { useParams } from '../../hooks/useParams'
import { useUser } from '../../hooks/useUser'

export const Users = () => {
  const { data, handleCreateUser } = useUser()
  const { getParams, setParams } = useParams()

  const isOpenModal = !!getParams('modal')

  const handleOpenModal = () => {
    setParams('modal', 'user')
  }

  return (
    <>
      <Modal.Root isOpen={isOpenModal}>
        <Modal.Header title="Cadastrar usuários" />
        <UserForm handleCreateUser={handleCreateUser} />
      </Modal.Root>
      <Container.Root>
        <Container.Header title="Usuários" textButton="Novo usuário" onClick={handleOpenModal} />
        <Container.Content>
          <UserTable data={data} />
        </Container.Content>
      </Container.Root>
    </>
  )
}
