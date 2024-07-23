import React from 'react'

import './style.scss';

const Body = ({ children }) => {
  return (
    <div className='container body-content'>{children}</div>
  )
}

export default Body
