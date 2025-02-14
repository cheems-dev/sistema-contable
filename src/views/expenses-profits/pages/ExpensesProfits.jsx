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

const data = [
  {
    id: 1,
    account: 'CTS EMPLEADOS (GE)',
    january: '34,930.73',
    february: '34,930.73',
    annual: '34,930.73',
    level: 'High',
  },
  {
    id: 2,
    account: 'SEGURO VIDA LEY DE',
    january: '91.79',
    february: '91.79',
    annual: '91.79',
    level: 'Medium',
  },
  {
    id: 3,
    account: 'ESSALUD REGIMEN D',
    january: '101.70',
    february: '101.70',
    annual: '101.70',
    level: 'Low',
  },
  {
    id: 4,
    account: 'ESSALUD REGIMEN D',
    january: '30,066.87',
    february: '30,066.87',
    annual: '30,066.87',
    level: 'High',
  },
  {
    id: 5,
    account: 'GASTOS RECREATIV',
    january: '97.58',
    february: '97.58',
    annual: '97.58',
    level: 'Medium',
  },
  {
    id: 6,
    account: 'BONIFICACION EXTR',
    january: '4,271.57',
    february: '4,271.57',
    annual: '4,271.57',
    level: 'Low',
  },
  {
    id: 7,
    account: 'BONIFICACIONES RE',
    january: '4,398.34',
    february: '4,398.34',
    annual: '4,398.34',
    level: 'High',
  },
  {
    id: 8,
    account: 'ASIGNACION FAMILI',
    january: '8,347.49',
    february: '8,347.49',
    annual: '8,347.49',
    level: 'Medium',
  },
  {
    id: 9,
    account: 'VACACIONES EMPLE',
    january: '36,158.86',
    february: '36,158.86',
    annual: '36,158.86',
    level: 'High',
  },
  {
    id: 10,
    account: 'GRATIFICACIONES E',
    january: '48,285.51',
    february: '48,285.51',
    annual: '48,285.51',
    level: 'Low',
  },
  {
    id: 11,
    account: 'COMISIONES EMPLE',
    january: '35,588.13',
    february: '35,588.13',
    annual: '35,588.13',
    level: 'Medium',
  },
  {
    id: 12,
    account: 'HORAS EXTRAS EMPL',
    january: '1,581.66',
    february: '1,581.66',
    annual: '1,581.66',
    level: 'Low',
  },
  {
    id: 13,
    account: 'SUELDOS EMPLEADO',
    january: '245,984.93',
    february: '245,984.93',
    annual: '245,984.93',
    level: 'High',
  },
  {
    id: 14,
    account: 'TRANSPORTE DE MAT',
    january: '11,628.97',
    february: '11,628.97',
    annual: '11,628.97',
    level: 'Medium',
  },
  {
    id: 15,
    account: 'MOVILIDAD LOCAL D',
    january: '8,923.16',
    february: '8,923.16',
    annual: '8,923.16',
    level: 'Low',
  },
  {
    id: 16,
    account: 'TRANSPORTE TERRE',
    january: '90.84',
    february: '90.84',
    annual: '90.84',
    level: 'High',
  },
  {
    id: 17,
    account: 'CORREOS Y SERVIC',
    january: '72.03',
    february: '72.03',
    annual: '72.03',
    level: 'Medium',
  },
  {
    id: 18,
    account: 'ALOJAMIENTO DE EM',
    january: '1,100.00',
    february: '1,100.00',
    annual: '1,100.00',
    level: 'Low',
  },
  {
    id: 19,
    account: 'ALIMENTACION DE E',
    january: '1,825.23',
    february: '1,825.23',
    annual: '1,825.23',
    level: 'Medium',
  },
  {
    id: 20,
    account: 'PEAJES (GEN. COMER',
    january: '3,431.73',
    february: '3,431.73',
    annual: '3,431.73',
    level: 'High',
  },
  {
    id: 21,
    account: 'OTROS GASTOS DE V',
    january: '66.10',
    february: '66.10',
    annual: '66.10',
    level: 'Low',
  },
  {
    id: 22,
    account: 'SERVICIOS ADMINIS',
    january: '1,749.95',
    february: '1,749.95',
    annual: '1,749.95',
    level: 'Medium',
  },
]

const ExpensesProfits = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [level, setLevel] = useState('')

  const filteredData = data.filter((item) => {
    const matchesDate =
      !startDate || !endDate || (item.january >= startDate && item.february <= endDate)
    const matchesLevel = !level || item.level.toLowerCase() === level.toLowerCase()
    return matchesDate && matchesLevel
  })

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
                    <CTableHeaderCell className="text-center">#</CTableHeaderCell>
                    <CTableHeaderCell>Nombre de cuenta</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Enero</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Febrero</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Anual acumulado</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nivel</CTableHeaderCell>
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
                      <CTableDataCell className="text-end">{item.february}</CTableDataCell>
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
