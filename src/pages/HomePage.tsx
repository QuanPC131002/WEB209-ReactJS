import React from 'react'
import Banner from '../components/Banner'
import Shop from '../components/Shop'
import Blog from '../components/Blog'
import Services from '../components/Services'
import News from '../components/News'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <News />
      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
    </div>
  )
}

export default HomePage
