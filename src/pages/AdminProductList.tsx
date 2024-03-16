import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ProductContex } from '../context/ProductContext'
import { IProduct } from '../interfaces/Products'
import { Link } from 'react-router-dom'

const AdminProductList = () => {
    const {products, onHandleDelete} = useContext(ProductContex)
  return (
    <div>
      <Header />
        <div className="admin-content">
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
                            <td>{item.price}</td>
                            <td>
                                <button className='btn-delete' onClick={() => onHandleDelete(item.id)}>DELETE</button>
                                <button className='btn-edit'><Link to=''>Edit</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default AdminProductList
