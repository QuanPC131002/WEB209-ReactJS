import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'



type FormValue = {
  id: number | string;
  name: string;
  image: string,
  price: number;
  discount: number;
  description: string,
}
const ProductAdd = () => {
  const {onHandleAdd} = useContext(ProductContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>()

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onHandleAdd(data);
    navigate('/products')
  }
  return (
    <div className='w-[400px] min-h-[400px] m-auto p-2 mt-5 border-[1px] border-solid border-[#ccc]'>
      <h1 className='text-xl text-[blue] text-center font-bold'>Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Name</label>
          <input className='w-[95%] border-[1px] border-solid border-[#ccc]' type="text" {...register('name', {required: true})} />
          {errors.name && <p className='text-[red]'>Tên trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Desc</label>
          <input className='w-[95%] border-[1px] border-solid border-[#ccc]' type="text" {...register('description', {required: true})} />
          {errors.description && <p className='text-[red]'>Desc trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Image</label>
          <input className='w-[95%] border-[1px] border-solid border-[#ccc]' type="text" {...register('image', {required: true})} />
          {errors.image && <p className='text-[red]'>Image trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Price</label>
          <input className='w-[95%] border-[1px] border-solid border-[#ccc]' type="number" {...register('price', {required: true})} />
          {errors.price && <p className='text-[red]'>Gía trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Discount</label>
          <input className='w-[95%] border-[1px] border-solid border-[#ccc]' type="number" {...register('discount', {required: true})} />
          {errors.discount && <p className='text-[red]'>Discount trống</p>}
        </div>
          <button type='submit' className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
