import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // React dom - renders the actual DOM based on the virtual DOMs snapshot difference for component state changes
import { Provider } from 'react-redux'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import store from './store'

// If needed you can use React Native to render the same in mobile
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
