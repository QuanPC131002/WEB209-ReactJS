import React, { useContext } from 'react'
import './css/index.css'

import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { ProductContex } from '../context/ProductContext'
import { IProduct } from '../interfaces/Products'
import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'

const AdminProductList = () => {
    const {products, onHandleDelete} = useContext(ProductContex)
  return (
    <div>
        <div className="container">
            <HeaderAdmin />
            <div className="content-admin">
                <div className="content-title">DANH SÁCH SẢN PHẨM</div>
                <button className='btn-add'><Link to='add'>Nhập thêm</Link></button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Thumnails</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item: IProduct, index: number) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img style={{width:'100px'}} src={item.thumbnail} alt="" /></td>
                                <td>{item.price}$</td>
                                <td>
                                    <button className='btn-delete' onClick={() => onHandleDelete(item.id)}>DELETE</button>
                                    <button className='btn-edit'><Link to={`/admin/edit/${item.id}`}>EDIT</Link></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default AdminProductList
