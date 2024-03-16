import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Content from './pages/Content'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import AdminProductList from './pages/AdminProductList'
import Home from './pages/Home'

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
    </Routes>
    </>
  )
  
}

export default App
