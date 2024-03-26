import React from 'react'
import { Shop1, Shop2, Shop3, Shop4 } from '.'

const Shop = () => {
  return (
    <div>
      <section className="shop">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">Shop</h2>
                </div>
                <div className="section-body">
                    <div className="shops">
                        <div className="shop-item">
                            <a href="" className="shop__link"
                                ><img
                                    src={Shop1}
                                    alt=""
                                    className="shop__image"
                            /></a>
                        </div>
                        <div className="shop-item">
                            <a href="" className="shop__link"
                                ><img
                                    src={Shop2}
                                    alt=""
                                    className="shop__image"
                            /></a>
                        </div>
                        <div className="shop-item">
                            <a href="" className="shop__link"
                                ><img
                                    src={Shop3}
                                    alt=""
                                    className="shop__image"
                            /></a>
                        </div>
                        <div className="shop-item">
                            <a href="" className="shop__link"
                                ><img
                                    src={Shop4}
                                    alt=""
                                    className="shop__image"
                            /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Shop
