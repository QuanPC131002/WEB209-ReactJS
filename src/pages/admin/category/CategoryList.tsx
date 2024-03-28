import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin'

const CategoryList = () => {
  return (
    <div className='grid grid-cols-[250px,1fr] gap-4'>
            <LayoutAdmin />
            <div className="">
                <h2 className='text-[20px] font-bold'>Quản Lý Danh mục</h2>
            </div>
    </div>
  )
}

export default CategoryList
