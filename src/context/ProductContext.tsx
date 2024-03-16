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
     if(confirm('Bạn có muốn xóa không ?')){
      const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter((item) => item.id !== id))
     }
    }

    const onHandleAdd = async (product: IProduct) => {
      const { data } = await axios.post(`http://localhost:3000/products`, product);
      setProducts([...products, data]);
    }
    const onHandleEdit = async (product: IProduct) => {
      const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
      setProducts(products.map((item => item.id === product.id ? product : item )))
    }
  return (
    <div>
      <ProductContex.Provider value={{products, setProducts, onHandleDelete, onHandleAdd, onHandleEdit}}>{children}</ProductContex.Provider>
    </div>
  )
}

export default ProductContextProvider
