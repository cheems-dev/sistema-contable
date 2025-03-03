import { useNavigate } from 'react-router-dom'
import { useLogin } from 'src/services/login/query'

interface LoginResponse {
  odatametadata: string
  sessionId: string
  version: string
  sessionTimeout: number
}

interface LoginCredentials {
  UserName: string
  Password: string
  CompanyDB: string
}

export const useAuth = () => {
  const navigate = useNavigate()
  const loginMutation = useLogin()

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await loginMutation.mutateAsync(credentials)
      
      if (response.sessionId) {
        // Store session info in localStorage
        localStorage.setItem('sessionId', response.sessionId)
        localStorage.setItem('sessionTimeout', response.sessionTimeout.toString())
        localStorage.setItem('isAuthenticated', 'true')
        
        // Redirect to home page
        navigate('/')
        return { success: true }
      }
      
      return { success: false, error: 'Invalid session response' }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'An error occurred during login' 
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('sessionId')
    localStorage.removeItem('sessionTimeout')
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  }

  const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true'
  }

  const getSessionId = () => {
    return localStorage.getItem('sessionId')
  }

  return {
    login,
    logout,
    isAuthenticated,
    getSessionId,
    isLoading: loginMutation.isPending
  }
} 