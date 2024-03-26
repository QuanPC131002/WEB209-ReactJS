import React from 'react'
import { Quantity, Quantity2, Quantity3, Quantity4 } from '.'

const Services = () => {
  return (
    <div>
       <section className="services">
            <div className="container-fluid">
                <div className="service-list">
                    <div className="service-item">
                        <img src={Quantity} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={Quantity2} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={Quantity3} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={Quantity4} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
