import React, { useContext } from 'react'
import { ProductContex } from '../context/ProductContext'
import { IProduct } from '../interfaces/Products'

const Content = () => {
  const {products} = useContext(ProductContex)
  return (
    <div>
      <div className="content">
        <h1>Sản phẩm nổi bật</h1>
        <div className="content-news">
           {products.map((item: IProduct, index: number) => (
              <div className="content-news--item" key={index}>
              <img src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <span>{item.description}</span>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Content
