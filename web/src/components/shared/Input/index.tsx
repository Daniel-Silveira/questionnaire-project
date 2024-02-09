import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">{label}</label>
        <input
          {...props}
          ref={ref}
          className="shadow-sm border outline-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
        />
        {errorMessage && <span className="text-red-500 text-xs">{errorMessage}</span>}
      </div>
    )
  }
)

export { Input }
