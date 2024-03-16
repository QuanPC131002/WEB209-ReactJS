import React from 'react'
import banner from '../assets/img/slider_1.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="header">
       <div className="menu">
        <nav>
                <ul>
                    <li><Link to='/home'>Trang chủ</Link></li>
                    <li><Link to='/about'>Giới thiệu</Link></li>
                    <li><Link to='/admin'>Quản trị</Link></li>
                </ul>
            </nav>
       </div>
        
        <div className="banner">
            <img src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
