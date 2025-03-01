import React from 'react'

/* const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard.js')) */

// Gastos y costos
const ExpensesProfitsPage = React.lazy(
  () => import('../views/expenses-profits/pages/ExpensesProfits'),
)

// Tabla ejemplo
const ExampleComponent  = React.lazy(
  () => import('../views/expenses-profits/pages/TreeTable'),
)


const routes = [
  { path: '/', exact: true, name: 'Home' },
  /* { path: '/dashboard', name: 'Dashboard', element: Dashboard }, */
  {
    path: '/gastos-ganancias',
    name: 'Gastos y ganancias',
    element: ExpensesProfitsPage,
  },
  {
    path: '/tabla-anidada',
    name: 'Tabla',
    element: ExampleComponent,
  },
]

export default routes
