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
    force: 'FUERZA AREQUIPA XPROVINCIAS',
    meta: 974440,
    ideal: 446618,
    real: 301113,
    kpi: '67.42',
    metaRent: 11.61,
    realRent: '10.71',
    metaUtil: 113115,
    idealUtil: 51845,
    realUtil: 32243,
    kpiUtil: '62.19',
  },
  {
    id: 2,
    force: 'FUERZA DE VENTAS PUNO',
    meta: 592550,
    ideal: 271585,
    real: 226561,
    kpi: '83.42',
    metaRent: 13.1,
    realRent: '12.85',
    metaUtil: 77598,
    idealUtil: 35566,
    realUtil: 29111,
    kpiUtil: '81.85',
  },
  {
    id: 3,
    force: 'FUERZA TELEVENTAS',
    meta: 92012,
    ideal: 42172,
    real: 98356,
    kpi: '233.23',
    metaRent: 14.4,
    realRent: '3.26',
    metaUtil: 13250,
    idealUtil: 6073,
    realUtil: 3206,
    kpiUtil: '52.79',
  },
  {
    id: 4,
    force: 'FUERZA TIENDA VIA',
    meta: 1632100,
    ideal: 748046,
    real: 441485,
    kpi: '59.02',
    metaRent: -3.79,
    realRent: '-4.23',
    metaUtil: -61937,
    idealUtil: -28388,
    realUtil: -18673,
    kpiUtil: '65.78',
  },
  {
    id: 5,
    force: 'FUERZA DE VENTAS TACNA',
    meta: 779600,
    ideal: 357317,
    real: 261130,
    kpi: '73.08',
    metaRent: 12.97,
    realRent: '10.62',
    metaUtil: 101144,
    idealUtil: 46358,
    realUtil: 27737,
    kpiUtil: '59.83',
  },
  {
    id: 6,
    force: 'FUERZA DE VENTAS MATERIALES',
    meta: 1762000,
    ideal: 807583,
    real: 601607,
    kpi: '74.49',
    metaRent: -10.25,
    realRent: '-12.06',
    metaUtil: -180670,
    idealUtil: -82807,
    realUtil: -72569,
    kpiUtil: '87.64',
  },
  {
    id: 7,
    force: 'FUERZA AREQUIPA MAYORISTA',
    meta: 545000,
    ideal: 249792,
    real: 73203,
    kpi: '29.31',
    metaRent: 8.34,
    realRent: '7.22',
    metaUtil: 45456,
    idealUtil: 20834,
    realUtil: 5651,
    kpiUtil: '27.12',
  },
  {
    id: 8,
    force: 'FUERZA DE VENTAS CUSCO',
    meta: 999620,
    ideal: 458159,
    real: 405834,
    kpi: '88.58',
    metaRent: 14.14,
    realRent: '12.40',
    metaUtil: 141336,
    idealUtil: 64779,
    realUtil: 50304,
    kpiUtil: '77.66',
  },
  {
    id: 9,
    force: 'FUERZA AREQUIPA NORTE',
    meta: 883501,
    ideal: 404938,
    real: 312796,
    kpi: '77.24',
    metaRent: 10.97,
    realRent: '9.81',
    metaUtil: 96892,
    idealUtil: 44409,
    realUtil: 30692,
    kpiUtil: '69.06',
  },
  {
    id: 10,
    force: 'FUERZA TIENDA GARCIA',
    meta: 455850,
    ideal: 208931,
    real: 128933,
    kpi: '61.71',
    metaRent: -2.79,
    realRent: '1.00',
    metaUtil: -12706,
    idealUtil: -5824,
    realUtil: 1290,
    kpiUtil: '-22.16',
  },
  {
    id: 11,
    force: 'FUERZA DE VENTA PROMOTORIA',
    meta: 93900,
    ideal: 43035,
    real: 51814,
    kpi: '120.39',
    metaRent: 11.07,
    realRent: '10.81',
    metaUtil: 10399,
    idealUtil: 4766,
    realUtil: 5602,
    kpiUtil: '117.54',
  },
  {
    id: 12,
    force: 'FUERZA AREQUIPA SUR',
    meta: 1423043,
    ideal: 652228,
    real: 492116,
    kpi: '75.45',
    metaRent: 11.26,
    realRent: '10.53',
    metaUtil: 160207,
    idealUtil: 73428,
    realUtil: 51837,
    kpiUtil: '70.60',
  },
  {
    id: 13,
    force: 'FUERZA DE VENTAS MOQUEGUA',
    meta: 790059,
    ideal: 362110,
    real: 278406,
    kpi: '76.88',
    metaRent: 11.84,
    realRent: '11.14',
    metaUtil: 93530,
    idealUtil: 42868,
    realUtil: 31027,
    kpiUtil: '72.38',
  },
  {
    id: 14,
    force: 'FUERZA TIENDA APLAO',
    meta: 818550,
    ideal: 375169,
    real: 321178,
    kpi: '85.61',
    metaRent: -2.75,
    realRent: '-2.33',
    metaUtil: -22551,
    idealUtil: -10336,
    realUtil: -7491,
    kpiUtil: '72.47',
  },
  {
    id: 15,
    force: 'FUERZA DE VENTA MADRE DE DIOS',
    meta: 282704,
    ideal: 129573,
    real: 132594,
    kpi: '102.33',
    metaRent: 14.5,
    realRent: '11.65',
    metaUtil: 40984,
    idealUtil: 18784,
    realUtil: 15443,
    kpiUtil: '82.21',
  },
  {
    id: 16,
    force: 'FUERZA TIENDA HUANUCO',
    meta: 1410900,
    ideal: 646663,
    real: 440702,
    kpi: '68.15',
    metaRent: -1.16,
    realRent: '-3.17',
    metaUtil: -16309,
    idealUtil: -7475,
    realUtil: -13972,
    kpiUtil: '186.92',
  },
]

const ExpensesProfits = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [minKPI, setMinKPI] = useState('')
  const [maxKPI, setMaxKPI] = useState('')

  const filteredData = data.filter((item) => {
    const matchesSearch = item.force.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesKPI =
      (!minKPI || parseFloat(item.kpi) >= parseFloat(minKPI)) &&
      (!maxKPI || parseFloat(item.kpi) <= parseFloat(maxKPI))
    return matchesSearch && matchesKPI
  })

  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems = filteredData.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const getKpiColor = (value) => {
    const numValue = parseFloat(value)
    if (numValue >= 100) return 'text-success'
    if (numValue >= 80) return 'text-warning'
    return 'text-danger'
  }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Tabla {' & '} Ventas</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6">
                  <CFormInput
                    type="text"
                    placeholder="Buscar por fuerza..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CCol>
                <CCol xs="12" md="3">
                  <CFormInput
                    type="number"
                    placeholder="KPI mínimo"
                    value={minKPI}
                    onChange={(e) => setMinKPI(e.target.value)}
                  />
                </CCol>
                <CCol xs="12" md="3">
                  <CFormInput
                    type="number"
                    placeholder="KPI máximo"
                    value={maxKPI}
                    onChange={(e) => setMaxKPI(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-2">
                <CCol xs="12" md="3">
                  <CFormSelect
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value))
                      setCurrentPage(1) // Reiniciar a la primera página al cambiar el número de elementos
                    }}
                  >
                    <option value="5">5 por página</option>
                    <option value="10">10 por página</option>
                    <option value="20">20 por página</option>
                    <option value="50">50 por página</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CTable align="middle" className="mb-0 border mt-4" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">#</CTableHeaderCell>
                    <CTableHeaderCell>Fuerza</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Meta</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Ideal</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Real</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">KPI</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Meta Rent.</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Real Rent.</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Meta Util.</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Ideal Util.</CTableHeaderCell>
                    <CTableHeaderCell className="text-end">Real Util.</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">KPI Util.</CTableHeaderCell>
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
                          <span>{item.force}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.meta.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.ideal.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.real.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className={`text-center ${getKpiColor(item.kpi)}`}>
                        {item.kpi}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">{item.metaRent}%</CTableDataCell>
                      <CTableDataCell className={`text-center ${getKpiColor(item.realRent)}`}>
                        {item.realRent}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.metaUtil.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.idealUtil.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className="text-end">
                        {item.realUtil.toLocaleString()}
                      </CTableDataCell>
                      <CTableDataCell className={`text-center ${getKpiColor(item.kpiUtil)}`}>
                        {item.kpiUtil}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

              <CPagination className="mt-3 justify-content-end" aria-label="Page navigation">
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ExpensesProfits
