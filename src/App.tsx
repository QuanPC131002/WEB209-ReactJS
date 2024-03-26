// import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

import '../style.scss'
import LayoutWebsite from './components/LayoutWebsite'
import HomePage from './pages/HomePage'
import ProductList from './components/ProductList'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
function App() {
  
  
  return (
    <>
    
      <Routes>
        <Route path='/' element={<LayoutWebsite />} >
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='products' element={<ProductList />}/>
        <Route path='products/add' element={<ProductAdd />}/>
        <Route path='products/edit/:id' element={<ProductEdit />}/>
      </Routes>

    </>
  )
}

export default App
