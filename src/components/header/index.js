import clsx from 'clsx';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import { routes } from '../../routes';
import { INFORMATION } from '../../constants';

import './style.scss';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className='header-info'>
        <div className='container'>
          <div className='header-info-item'>
            <EnvironmentFilled size='large' />
            <p>{INFORMATION.ADDRESS}</p>
          </div>
          <div className='header-info-item'>
            <PhoneFilled size='large' />
            <p>{INFORMATION.PHONE}</p>
          </div>
        </div>
      </div>
      <div className='header-content'>
        <div className='container'>
          {routes.map((item, idx) => (
            <Link key={idx} className={clsx('header-content-item', location?.pathname === item?.url && 'active')} to={item?.url}>
              <p>{item?.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
