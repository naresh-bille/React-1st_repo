import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Data1 from './components/Data1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  < Data1 />
  </StrictMode>,
)
