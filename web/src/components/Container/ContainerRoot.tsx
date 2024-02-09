import { ReactNode } from 'react'

type ContainerRootProps = {
  children: ReactNode
}

export const ContainerRoot = ({ children }: ContainerRootProps) => {
  return <div className="p-4 sm:ml-64">{children}</div>
}
