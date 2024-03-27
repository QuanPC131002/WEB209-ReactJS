import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutWebsite from './components/LayoutWebsite'
import HomePage from './pages/HomePage'
import ProductList from './pages/admin/ProductList'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
function App() {
  
  
  return (
    <>
    
      <Routes>
        <Route path='/home' element={<LayoutWebsite />} >
          <Route path='/home' element={<HomePage />} />
        </Route>
        <Route path='admin' element={<ProductList />}/>
        <Route path='admin/add' element={<ProductAdd />}/>
        <Route path='admin/edit/:id' element={<ProductEdit />}/>
      </Routes>

    </>
  )
}

export default App
