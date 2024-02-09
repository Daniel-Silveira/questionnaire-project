import { useSearchParams } from 'react-router-dom'

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const getParams = (key: string) => searchParams.get(key)

  const setParams = (key: string, value: string) =>
    setSearchParams(state => {
      state.set(key, value)
      return state
    })

  const removeParams = (key: string) => {
    setSearchParams(state => {
      state.delete(key)
      return state
    })
  }
  return { getParams, setParams, removeParams }
}
