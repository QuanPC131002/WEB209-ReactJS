import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLink, faList, fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div className="bg-red-500 min-h-[800px]">
            <nav>
                <ul>
                    <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                        <FontAwesomeIcon icon={fas.faHouse} />
                        <Link to='' className='ml-2'>Trang chủ</Link>
                    </li>
                    <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Link to='/admin' className='ml-2'>Sản phẩm</Link>
                    </li>
                    <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                        <FontAwesomeIcon icon={faList} />
                        <Link to='' className='ml-2'>Danh mục</Link>
                    </li>
                    <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                        <FontAwesomeIcon icon={faLink} />
                        <Link to='/' className='ml-2'>Trở lại website</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LayoutAdmin