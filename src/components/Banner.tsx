import React from 'react'
import { banner } from './index'
const Banner = () => {
  return (
    <div>
       <section className="banner">
            <img src={banner} alt="" className="banner__img" />
        </section>
    </div>
  )
}

export default Banner
