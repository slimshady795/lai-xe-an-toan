import React from 'react'
import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';

import LOGO_FB from '../../assets/images/logo/fb-logo.png';

import './style.scss';
import { INFORMATION } from '../../constants';

const Footer = () => {
  return (
    <footer>
      <iframe
        className='google-maps'
        title="asdadasda"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.1517599382207!2d106.83849088590246!3d10.958697183641073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dc1efe7c277f%3A0xc6d1fe03704aa0d4!2zMjA1YyBQaOG6oW0gVsSDbiBUaHXhuq1uLCBUw6JuIFRp4bq_biwgVGjDoG5oIHBo4buRIEJpw6puIEjDsmEsIMSQ4buTbmcgTmFpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1722525710459!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className='footer-content'>
        <div className='container'>
          <div className='description'>
            Đào tạo học lái xe ô tô giá rẻ
            <br />
            - Tập lái xe an toàn
            <br />
            - Hỗ trợ ghi danh lên đến 64 tỉnh thành trên khắp cả nước.
            <br />
            Bạn không cần suy nghĩ về việc tìm kiếm địa điểm uy tín ở tại khu vực bạn đang sống, với tỷ lệ đậu lên đến 90% cùng với giảng viên có nhiều kinh nghiệm 1 kèm 1, chúng tôi sẽ hỗ trợ bạn hết mình trên con đường học !
          </div>
          <div className='contact'>
            <p className='contact-title'>
              Liên Hệ
            </p>
            <div className='contact-item'>
              <EnvironmentFilled />
              <p>{INFORMATION.ADDRESS}</p>
            </div>
            <div className='contact-item'>
              <PhoneFilled />
              <p>{INFORMATION.PHONE}</p>
            </div>
          </div>
          <div className='social'>
            <a href={INFORMATION.FACEBOOK} target="_blank" rel="noreferrer">
              <img src={LOGO_FB} alt='' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
