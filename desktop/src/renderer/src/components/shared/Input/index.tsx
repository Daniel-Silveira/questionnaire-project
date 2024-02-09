import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <div>
      <label className="block mb-2 text-sm text-white">{label}</label>
      <input
        {...props}
        ref={ref}
        className="shadow-sm border outline-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
      />
    </div>
  )
})

export { Input }
