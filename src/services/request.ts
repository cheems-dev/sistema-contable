import apiLogin from 'src/utils/axios'

import { ApiResponse } from 'src/types/api/request'

interface RequestConfig {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data?: any
  params?: any
}

export const request = async <T>({ method, url, data, params }: RequestConfig): Promise<T> => {
  try {
    const response = await apiLogin.request<ApiResponse<T>>({
      method,
      url,
      data,
      params,
    })

    return response.data.data
  } catch (error) {
    console.error('Error en la solicitud:', error)
    throw error
  }
}
