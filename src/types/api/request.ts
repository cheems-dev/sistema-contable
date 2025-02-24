export interface RequestConfig {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data?: any
  params?: any
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
