import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CFormInput,
  CForm,
} from '@coreui/react'

const BudgetEditModal = ({ data, onUpdateBudget }) => {
  const [visible, setVisible] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [newBudgetValue, setNewBudgetValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedMonth && selectedAccount && newBudgetValue) {
      onUpdateBudget({
        accountId: selectedAccount,
        month: selectedMonth,
        value: newBudgetValue,
      })
      // Reset form
      setSelectedMonth('')
      setSelectedAccount('')
      setNewBudgetValue('')
      setVisible(false)
    }
  }

  const getCurrentBudget = () => {
    if (!selectedMonth || !selectedAccount) return ''
    const account = data.find(item => item.id === parseInt(selectedAccount))
    return account ? account[`${selectedMonth}_budget`] : ''
  }

  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Editar Presupuesto
      </CButton>

      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        backdrop="static"
        keyboard={false}
      >
        <CForm onSubmit={handleSubmit}>
          <CModalHeader>
            <CModalTitle>Modificar Presupuesto</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="mb-3">
              <label className="form-label">Seleccionar Mes</label>
              <CFormSelect
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                required
              >
                <option value="">Seleccionar mes</option>
                <option value="january">Enero</option>
                <option value="february">Febrero</option>
              </CFormSelect>
            </div>

            <div className="mb-3">
              <label className="form-label">Seleccionar Cuenta</label>
              <CFormSelect
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
                required
                disabled={!selectedMonth}
              >
                <option value="">Seleccionar cuenta</option>
                {data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.account}
                  </option>
                ))}
              </CFormSelect>
            </div>

            {selectedMonth && selectedAccount && (
              <div className="mb-3">
                <label className="form-label">Presupuesto Actual</label>
                <CFormInput
                  type="text"
                  value={getCurrentBudget()}
                  disabled
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Nuevo Presupuesto</label>
              <CFormInput
                type="number"
                step="0.01"
                value={newBudgetValue}
                onChange={(e) => setNewBudgetValue(e.target.value)}
                required
                disabled={!selectedAccount}
              />
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="success" type="submit">
              Guardar Cambios
            </CButton>
            <CButton color="danger" onClick={() => setVisible(false)}>
              Cancelar
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

export default BudgetEditModal