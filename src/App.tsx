import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { IProduct } from './interfaces/Product'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import Count from './components/Count'

function App() {
  
  
  return (
    <>
    {/* <div className="container">
      <Header />
      <Home />
      <Footer />
    </div> */}
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/products' element={<ProductList /> } />
        <Route path='/products/add' element={<ProductAdd /> } />
        <Route path='/products/edit/:id' element={<ProductEdit /> } />
      </Routes>

    </>
  )
}

export default App
