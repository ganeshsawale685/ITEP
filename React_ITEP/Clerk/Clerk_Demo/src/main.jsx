import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/clerk-react";

const p ="pk_test_Y2hhcm1lZC1wb3NzdW0tMjIuY2xlcmsuYWNjb3VudHMuZGV2JA"
createRoot(document.getElementById('root')).render(

 <ClerkProvider publishableKey={p}>
  <App />
</ClerkProvider>
  
)
