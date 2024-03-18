import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CounterContextProvider from './contexts/CounterContextProvider.tsx'
import ProductContextProvider from './contexts/ProductContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <ProductContextProvider>
    <CounterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterContextProvider>
  </ProductContextProvider>
 </React.StrictMode>
)
