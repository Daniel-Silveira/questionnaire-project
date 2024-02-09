import { ReactNode } from 'react'

type ModalProps = {
  isOpen?: boolean
  width?: string
  children?: ReactNode
}

export const ModalRoot = ({ isOpen, width, children }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen w-screen">
      <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700 ${width || 'w-4/12'}`}>
        {children}
      </div>
    </div>
  )
}
