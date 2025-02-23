import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import BudgetEditModal from '../modals/BudgetEditModal'

const ExpensesProfits = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [level, setLevel] = useState('')
  const [data, setData] = useState([
    {
      id: 1,
      account: 'CTS EMPLEADOS (GE)',
      january: '34,930.73',
      february: '34,930.73',
      annual: '34,930.73',
      level: 'High',
      january_budget: '35,000.00',
      february_budget: '35,000.00',
    },
    {
      id: 2,
      account: 'SEGURO VIDA LEY DE',
      january: '91.79',
      february: '91.79',
      annual: '91.79',
      level: 'Medium',
      january_budget: '100.00',
      february_budget: '100.00',
    },
    {
      id: 3,
      account: 'ESSALUD REGIMEN D',
      january: '101.70',
      february: '101.70',
      annual: '101.70',
      level: 'Low',
      january_budget: '105.00',
      february_budget: '105.00',
    },
    {
      id: 4,
      account: 'ESSALUD REGIMEN D',
      january: '30,066.87',
      february: '30,066.87',
      annual: '30,066.87',
      level: 'High',
      january_budget: '30,100.00',
      february_budget: '30,100.00',
    },
    {
      id: 5,
      account: 'GASTOS RECREATIV',
      january: '97.58',
      february: '97.58',
      annual: '97.58',
      level: 'Medium',
      january_budget: '100.00',
      february_budget: '100.00',
    },
    {
      id: 6,
      account: 'BONIFICACION EXTR',
      january: '4,271.57',
      february: '4,271.57',
      annual: '4,271.57',
      level: 'Low',
      january_budget: '4,300.00',
      february_budget: '4,300.00',
    },
    {
      id: 7,
      account: 'BONIFICACIONES RE',
      january: '4,398.34',
      february: '4,398.34',
      annual: '4,398.34',
      level: 'High',
      january_budget: '4,400.00',
      february_budget: '4,400.00',
    },
    {
      id: 8,
      account: 'ASIGNACION FAMILI',
      january: '8,347.49',
      february: '8,347.49',
      annual: '8,347.49',
      level: 'Medium',
      january_budget: '8,400.00',
      february_budget: '8,400.00',
    },
    {
      id: 9,
      account: 'VACACIONES EMPLE',
      january: '36,158.86',
      february: '36,158.86',
      annual: '36,158.86',
      level: 'High',
      january_budget: '36,200.00',
      february_budget: '36,200.00',
    },
    {
      id: 10,
      account: 'GRATIFICACIONES E',
      january: '48,285.51',
      february: '48,285.51',
      annual: '48,285.51',
      level: 'Low',
      january_budget: '48,300.00',
      february_budget: '48,300.00',
    },
    {
      id: 11,
      account: 'COMISIONES EMPLE',
      january: '35,588.13',
      february: '35,588.13',
      annual: '35,588.13',
      level: 'Medium',
      january_budget: '35,600.00',
      february_budget: '35,600.00',
    },
    {
      id: 12,
      account: 'HORAS EXTRAS EMPL',
      january: '1,581.66',
      february: '1,581.66',
      annual: '1,581.66',
      level: 'Low',
      january_budget: '1,600.00',
      february_budget: '1,600.00',
    },
    {
      id: 13,
      account: 'SUELDOS EMPLEADO',
      january: '245,984.93',
      february: '245,984.93',
      annual: '245,984.93',
      level: 'High',
      january_budget: '246,000.00',
      february_budget: '246,000.00',
    },
    {
      id: 14,
      account: 'TRANSPORTE DE MAT',
      january: '11,628.97',
      february: '11,628.97',
      annual: '11,628.97',
      level: 'Medium',
      january_budget: '11,700.00',
      february_budget: '11,700.00',
    },
    {
      id: 15,
      account: 'MOVILIDAD LOCAL D',
      january: '8,923.16',
      february: '8,923.16',
      annual: '8,923.16',
      level: 'Low',
      january_budget: '9,000.00',
      february_budget: '9,000.00',
    },
    {
      id: 16,
      account: 'TRANSPORTE TERRE',
      january: '90.84',
      february: '90.84',
      annual: '90.84',
      level: 'High',
      january_budget: '100.00',
      february_budget: '100.00',
    },
    {
      id: 17,
      account: 'CORREOS Y SERVIC',
      january: '72.03',
      february: '72.03',
      annual: '72.03',
      level: 'Medium',
      january_budget: '75.00',
      february_budget: '75.00',
    },
    {
      id: 18,
      account: 'ALOJAMIENTO DE EM',
      january: '1,100.00',
      february: '1,100.00',
      annual: '1,100.00',
      level: 'Low',
      january_budget: '1,150.00',
      february_budget: '1,150.00',
    },
    {
      id: 19,
      account: 'ALIMENTACION DE E',
      january: '1,825.23',
      february: '1,825.23',
      annual: '1,825.23',
      level: 'Medium',
      january_budget: '1,850.00',
      february_budget: '1,850.00',
    },
    {
      id: 20,
      account: 'PEAJES (GEN. COMER',
      january: '3,431.73',
      february: '3,431.73',
      annual: '3,431.73',
      level: 'High',
      january_budget: '3,500.00',
      february_budget: '3,500.00',
    },
    {
      id: 21,
      account: 'OTROS GASTOS DE V',
      january: '66.10',
      february: '66.10',
      annual: '66.10',
      level: 'Low',
      january_budget: '70.00',
      february_budget: '70.00',
    },
    {
      id: 22,
      account: 'SERVICIOS ADMINIS',
      january: '1,749.95',
      february: '1,749.95',
      annual: '1,749.95',
      level: 'Medium',
      january_budget: '1,800.00',
      february_budget: '1,800.00',
    },
  ])

  const headers = [
    { key: 'id', label: '#', className: 'text-center' },
    { key: 'account', label: 'Nombre de cuenta' },
    { key: 'january', label: 'Enero Real', className: 'text-end' },
    { key: 'january_budget', label: 'Enero Presupuesto', className: 'text-end' },
    { key: 'february', label: 'Febrero Real', className: 'text-end' },
    { key: 'february_budget', label: 'Febrero Presupuesto', className: 'text-end' },
    { key: 'annual', label: 'Anual acumulado', className: 'text-end' },
    { key: 'level', label: 'Nivel', className: 'text-center' },
  ]

  const filteredData = data.filter((item) => {
    const matchesDate =
      !startDate || !endDate || (item.january >= startDate && item.february <= endDate)
    const matchesLevel = !level || item.level.toLowerCase() === level.toLowerCase()
    return matchesDate && matchesLevel
  })

  const handleUpdateBudget = ({ accountId, month, value }) => {
    const newData = data.map((item) => {
      if (item.id === accountId) {
        return {
          ...item,
          [`${month}_budget`]: value,
        }
      }
      return item
    })
    console.log(newData)
    console.log(accountId, month, value)
  }

  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems = filteredData.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Cuenta de pérdidas y ganancias</CCardHeader>
            <CCardBody>
              <CCard>
                <CCardBody className="bg-secondary rounded">
                  <CRow>
                    <CCol xs="12" md="4">
                      <label>Fecha de inicio:</label>
                      <CFormInput
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </CCol>
                    <CCol xs="12" md="4">
                      <label>Fecha final:</label>
                      <CFormInput
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </CCol>
                    <CCol xs="12" md="4">
                      <label>Niveles:</label>
                      <CFormSelect value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="">Seleccionar nivel</option>
                        <option value="high">Alto</option>
                        <option value="medium">Medio</option>
                        <option value="low">Bajo</option>
                      </CFormSelect>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
              <CRow className="mt-3">
                <CCol>
                  <BudgetEditModal data={data} onUpdateBudget={handleUpdateBudget} />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                <CCol xs="12" md="6" lg="4" className="mb-3 mb-md-0">
                  <label className="d-md-none">Elementos por página:</label>
                  <CFormSelect
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value))
                      setCurrentPage(1)
                    }}
                    color="secondary"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="12" md="6" lg="8">
                  <CPagination className="justify-content-end" aria-label="Page navigation">
                    <CPaginationItem
                      aria-label="Previous"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </CPaginationItem>

                    {[...Array(totalPages)].map((_, index) => (
                      <CPaginationItem
                        key={index + 1}
                        active={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </CPaginationItem>
                    ))}

                    <CPaginationItem
                      aria-label="Next"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                  </CPagination>
                </CCol>
              </CRow>
              <CTable align="middle" className="border  rounded" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    {headers.map((header) => (
                      <CTableHeaderCell key={header.key} className={header.className}>
                        {header.label}
                      </CTableHeaderCell>
                    ))}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems.map((item, index) => (
                    <CTableRow key={item.id}>
                      <CTableDataCell className="text-center">
                        {firstIndex + index + 1}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.account}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-end">{item.january}</CTableDataCell>
                      <CTableDataCell className="text-end">{item.january_budget}</CTableDataCell>
                      <CTableDataCell className="text-end">{item.february}</CTableDataCell>
                      <CTableDataCell className="text-end">{item.february_budget}</CTableDataCell>
                      <CTableDataCell className="text-end">{item.annual}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.level}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        {/* Add action buttons or links here */}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ExpensesProfits
