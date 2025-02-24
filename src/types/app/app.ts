export interface User {
  CompanyDB: string
  Password: string
  UserName: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
