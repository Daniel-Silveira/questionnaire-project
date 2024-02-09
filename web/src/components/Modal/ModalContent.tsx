import { ReactNode } from 'react'

type ModalContentProps = {
  children?: ReactNode
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="p-4 md:p-5 space-y-4">{children}</div>
}
