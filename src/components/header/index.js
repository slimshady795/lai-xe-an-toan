import React from 'react'
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes';

import './style.scss';

const items = [{
  label: 'Trang chủ',
  url: PATHS.HOME
}, {
  label: 'Giới thiệu',
  url: PATHS.INTRODUCTION
}, {
  label: 'Học bằng B1',
  url: PATHS.B1
}, {
  label: 'Học bằng B2',
  url: PATHS.B2
}, {
  label: 'Học bằng C',
  url: PATHS.C
}, {
  label: 'Nâng dấu',
  url: PATHS.UPGRADE
}]

const Header = () => {
  return (
    <>
    <div className='container header-info'>
<div className='number-phone'>
  
</div>
    </div>
      <header>
        <div className='container header-content'>
          {items.map((item, idx) => (
            <Link key={idx} className='header-content-item' to={item?.url}>
              <p>{item?.label}</p>
            </Link>
          ))}
        </div>
      </header>
    </>
  )
}

export default Header
