import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from '@coreui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'

type FormInputs = {
  UserName: string
  Password: string
  CompanyDB: string
}

const Login = () => {
  const { login, isLoading } = useAuth()
  const [error, setError] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      CompanyDB: 'FEMACO__PROD'
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      setError(null)
      const result = await login(data)
      if (!result.success) {
        setError(result.error)
      }
    } catch (error) {
      setError('An unexpected error occurred')
      console.error('Login error:', error)
    }
  })

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onSubmit}>
                    <h1>Inicio de Sesión</h1>
                    <p className="text-body-secondary">Entra en tu cuenta</p>
                    {error && (
                      <CAlert color="danger" className="mb-3">
                        {error}
                      </CAlert>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Usuario" 
                        {...register("UserName", { 
                          required: "Usuario requerido" 
                        })}
                        invalid={!!errors.UserName}
                        feedback={errors.UserName?.message}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        {...register("Password", { 
                          required: "Password es requerido" 
                        })}
                        invalid={!!errors.Password}
                        feedback={errors.Password?.message}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton 
                          type="submit" 
                          color="primary" 
                          className="px-4"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Espere...' : 'Iniciar Sesión'}
                        </CButton>
                      </CCol>
                   {/*    <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
