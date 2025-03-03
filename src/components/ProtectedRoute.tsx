import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated()) {
    // Redirect to login page but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
} 