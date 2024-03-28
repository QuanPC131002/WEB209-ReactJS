import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLink, faList, fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from "react";

const LayoutAdmin = () => {
    const [isActive, setIsActive] = useState(null);
  const toggleActive = (item: any ) => {
    setIsActive(item);
  }
    return (
        <div className="bg-red-500 min-h-[800px]">
            <nav>
                <ul>
                    <li className={`p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200 ${isActive === 'Trang chủ' && 'bg-gray-800'}`}>
                        <FontAwesomeIcon icon={fas.faHouse} />
                        <Link to='/' className='ml-2' onClick={() => toggleActive('Trang chủ')}>Trang chủ</Link>
                    </li>
                    <li className={`p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200 ${isActive === 'Sản phẩm' && 'bg-gray-800'}`}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Link to='/admin' className='ml-2' onClick={() => toggleActive('Sản phẩm')}>Sản phẩm</Link>
                    </li>
                    <li className={`p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200 ${isActive === 'Danh mục' && 'bg-gray-800'}`}>
                        <FontAwesomeIcon icon={faList} />
                        <Link to='/category' className='ml-2' onClick={() => toggleActive('Danh mục')}>Danh mục</Link>
                    </li>
                  
                </ul>
            </nav>
        </div>
    )
}

export default LayoutAdmin