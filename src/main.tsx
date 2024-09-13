import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'

console.log("main.tsx")
createRoot(document.getElementById('root')!).render(

      <StrictMode>
        <App />
      </StrictMode>

 ,
)
