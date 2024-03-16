import React, { createContext, useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Products'
import axios from 'axios'

export const ProductContex = createContext({} as any) 
const ProductContextProvider = ({children} : {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:3000/products');
            setProducts(data);
        })()
    }, [])

    const onHandleDelete = async (id: number) => {
      const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter((item) => item.id !== id))
    }
  return (
    <div>
      <ProductContex.Provider value={{products, setProducts, onHandleDelete}}>{children}</ProductContex.Provider>
    </div>
  )
}

export default ProductContextProvider
