import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './contexts/ProductContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <ProductContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ProductContextProvider>
 </React.StrictMode>
)
