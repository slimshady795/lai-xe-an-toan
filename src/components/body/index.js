import clsx from 'clsx';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { routes } from '../../routes';

import './style.scss';

const Body = ({ children }) => {
  const location = useLocation();

  const currRoute = routes.find(item => location?.pathname === item?.url);

  return (
    <div className={clsx('container', 'body-content', currRoute?.key)}>{children}</div>
  )
}

export default Body
