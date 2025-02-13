const ExpensesProfitsPage = React.lazy(() => import('../views/expenses-profits/index'))

const routerApp = {
  private: [
    {
      path: '/gastos-ganancias',
      name: 'Dashboard',
      element: ExpensesProfitsPage,
    },
  ],
}

export default routerApp
