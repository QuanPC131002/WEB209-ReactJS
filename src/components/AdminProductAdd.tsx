import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductContex } from '../context/ProductContext'
import './css/index.css'
import HeaderAdmin from './HeaderAdmin'
import Footer from '../pages/Footer'
type FormValue = {
    id: number,
    title: string,
    price: number,
    thumbnail: string,
    description: string

}
const AdminProductAdd = () => {
    const {products, onHandleAdd} = useContext(ProductContex)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValue>()

    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormValue> = (data) => {
        onHandleAdd(data);
        navigate('/admin');
    }
  return (
    <div className="">
        <div className="container">
            <HeaderAdmin />
            <div className='myForm'>
            <div className="content-title">THÊM SẢN PHẨM</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="myForm-item">
                    <label htmlFor="">Title</label>
                    <input type="text" {...register('title', { required: true})} />
                    {errors.title && <span>Tên trống !</span>}
                </div>
                
                <div className="myForm-item">
                    <label htmlFor="">Price</label>
                        <input type="number" {...register('price', { required: true, min: 0})} />
                        {errors.price && errors.price.type === "required" && <span>Giá trống !</span>}
                        {errors.price && errors.price.type === "min" && <span>Giá phải là số dương !</span>}
                    </div>
                <div className="myForm-item">
                    <label htmlFor="">Desc</label>
                        <input type="text" {...register('description', { required: true})} />
                        {errors.description && <span>Mô tả trống !</span>}
                    </div>
                <div className="myForm-item">
                    <label htmlFor="">Thumbnail</label>
                        <input type="text" {...register('thumbnail', { required: true})} />
                        {errors.thumbnail && <span>Ảnh trống !</span>}
                </div>
                <div className="myForm-item">
                    <button type='submit' className='btn-add'>Thêm</button>
                </div>
            </form>
            </div>
        </div>
            <Footer />
    </div>
  )
}

export default AdminProductAdd
