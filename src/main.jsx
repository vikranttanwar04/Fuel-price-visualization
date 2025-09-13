import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilterProvider } from './context/filterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
    <App />
    </FilterProvider>
  </StrictMode>,
)
