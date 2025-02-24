import { User } from 'src/types'
import { request } from '../request'

interface UserResponse {
  'odata.metada': string
  SessionId: string
  Version: string
  params?: any
}

export const fetchUsers = async (data: User): Promise<UserResponse> => {
  return await request({ method: 'post', url: 'Login', data: data })
}
