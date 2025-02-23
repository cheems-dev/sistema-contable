// En axiosConfig.js
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // Manejo de errores basado en el código de estado
      switch (error.response.status) {
        case 401:
          console.error('Error 401: No autorizado')
          // Aquí puedes redirigir al usuario a la página de inicio de sesión
          break
        case 404:
          console.error('Error 404: No encontrado')
          break
        default:
          console.error('Error desconocido:', error.response)
      }
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor')
    } else {
      console.error('Error de configuración:', error.message)
    }
    return Promise.reject(error)
  },
)
