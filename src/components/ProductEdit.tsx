import React, { useContext, useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../contexts/ProductContext'



type FormValue = {
  name: string;
  price: number
}
const ProductAdd = () => {
  const [, dispatch] = useContext(ProductContext)
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValue>()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`)
      reset(data)
    })()
  }, [id])
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = async (product) => {
    try {
      const { data } = await axios.put(`http://localhost:3000/products/${id}`, product)
      dispatch({type: 'UPDATE_PRODUCT', payload: data as IProduct})
    } catch (error) {
      
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
