import axios from 'axios'

export const apiLogin = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_LOGIN,
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
  })
})()

// Interceptor para agregar el token de autorización
apiLogin.interceptors.request.use(
  (config) => {
    /*   const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }*/
    return config
  },
  (error) => Promise.reject(error),
)

// Interceptor para manejo de errores globales
apiLogin.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la API:', error.response?.data || error.message)
    if (error.response) {
      console.error('Respuesta del servidor:', error.response.data)
    } else if (error.request) {
      console.error('Sin respuesta del servidor:', error.request)
    } else {
      console.error('Error desconocido:', error.message)
    }
    return Promise.reject(error)
  },
)

export default apiLogin
