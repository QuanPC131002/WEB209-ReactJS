import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutWebsite from './components/LayoutWebsite'
import HomePage from './pages/HomePage'
import ProductAdd from './pages/admin/product/ProductAdd'
import ProductEdit from './pages/admin/product/ProductEdit'
import ProductList from './pages/admin/product/ProductList'
import CategoryList from './pages/admin/category/CategoryList'
import Shop from './components/Shop'
import Blog from './components/Blog'
function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />} >
          <Route path='/' element={<HomePage />} />
          <Route path='shop' element={<Shop />} />
          <Route path='about' element={<Blog />} />
        </Route>
        <Route path='admin' element={<ProductList />}/>
        <Route path='products' element={<ProductList />}/>
        <Route path='products/add' element={<ProductAdd />}/>
        <Route path='products/edit/:id' element={<ProductEdit />}/>
        <Route path='category' element={<CategoryList />}/>
      </Routes>

    </>
  )
}

export default App
