import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './App'
import store from './store'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
} else {
  console.error("No se encontró el elemento con id 'root'.")
}
