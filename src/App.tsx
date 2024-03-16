import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Content from './pages/Content'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import AdminProductList from './components/AdminProductList'
import Home from './pages/Home'
import AdminProductAdd from './components/AdminProductAdd'
import AdminProductEdit from './components/AdminProductEdit'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}>
          <Route path='home' element={<Header />}/>
          <Route path='home' element={<Content />}/>
          <Route path='home' element={<Footer />}/>
        </Route>
        <Route path='/admin' element={<AdminProductList />} />
        <Route path='/admin/add' element={<AdminProductAdd />} />
        <Route path='/admin/edit/:id' element={<AdminProductEdit />} />
    </Routes>
    </>
  )
  
}

export default App
