import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {TaskContextProvider} from './context/TaskContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <App></App>
    </TaskContextProvider>
    
  </StrictMode>,
)
