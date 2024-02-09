import { ReactNode } from 'react'

type ContainerContentProps = {
  children: ReactNode
}

export const ContainerContent = ({ children }: ContainerContentProps) => {
  return <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">{children}</div>
}
