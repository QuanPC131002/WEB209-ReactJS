import React, { useContext } from 'react'
import { IProduct } from '../interfaces/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import axios from 'axios'



type FormValue = {
  id: number
  name: string;
  price: number
}
const ProductAdd = () => {
  const [, dispatch] = useContext(ProductContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>()

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = async (product) => {
    try {
      const { data } = await axios.post(' http://localhost:3000/products', product)
      dispatch({type: 'ADD_PRODUCT', payload: data as IProduct});
    } catch (error) {
      console.log(error);
      
    }
    navigate('/products')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})} />
        {errors.name && <span>Tên trống</span>}
        <input type="number" {...register('price', {required: true})} />
        {errors.price && <span>Gía trống</span>}
        <button type='submit'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
