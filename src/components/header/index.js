import clsx from 'clsx';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../routes';

import './style.scss';

const items = [{
  label: 'Trang chủ',
  url: PATHS.HOME
}, {
  label: 'Giới thiệu',
  url: PATHS.INTRODUCTION
}, {
  label: 'Học 120 câu mô phỏng',
  url: PATHS.SIMULATION
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
  const location = useLocation();

  return (
    <>
      <div className='container header-info'>
        <div className='number-phone'>

        </div>
      </div>
      <header>
        <div className='container header-content'>
          {items.map((item, idx) => (
            <Link key={idx} className={clsx('header-content-item', location?.pathname === item?.url && 'active')} to={item?.url}>
              <p>{item?.label}</p>
            </Link>
          ))}
        </div>
      </header>
    </>
  )
}

export default Header
