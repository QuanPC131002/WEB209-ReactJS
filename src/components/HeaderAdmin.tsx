import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <div className='container'>
        <div className="nav">
                <nav>
                    <ul>
                        <li><Link to='/admin'>Trang chủ</Link></li>
                        <li><Link to='/admin'>Sản phẩm</Link></li>
                        <li><Link to='/home'>Trở lại website</Link></li>
                    </ul>
                </nav>
            </div>
    </div>
  )
}

export default HeaderAdmin
