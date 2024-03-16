import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
  return (
    <div>
      <div className="border"></div>
      <div className="footer">
        <div className="footer-item">
          <h2>THỜI GIAN LÀM VIỆC</h2>
          <p>
            Thứ 2 - 6: 8h:00 - 17h:30
          </p>
          <p>Thứ 7: 8h:00 - 12h:00</p>
          <p>CN và các ngày lễ: Nghỉ</p>
        </div>
        <div className="footer-item">
          <h2>SẢN PHẨM</h2>
          <p>Quần áo nam</p>
          <p>Quần áo nữ</p>
        </div>
        <div className="footer-item">
          <h2>Liên hệ</h2>
          <p>SĐT: 0921771291</p>
          <p>Email: truongquan123@gmail.com</p>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon className='icon' icon={faInstagram}/>
          <FontAwesomeIcon className='icon' icon={faLinkedin}/>
          <FontAwesomeIcon className='icon' icon={faFacebook}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
