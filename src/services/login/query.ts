import { useMutation } from '@tanstack/react-query'
import { fetchUsers } from './apiLogin'

export const useLogin = () => {
  return useMutation({
    mutationFn: fetchUsers,
    onSuccess: (data) => {
      console.log(data)
      /* localStorage.setItem('token', data.token) */
    },
    onError: (error) => {
      console.error('Error en el login:', error.message)
    },
  })
}
