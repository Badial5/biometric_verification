import React from 'react'
import { Link, Outlet } from 'react-router-dom'


import "./banner.styles.scss"

const Banner = () => {
  return (
    <>
    <div className="mainHeader">
          <Link to="/" className='calogo'> Calvin Logo</Link>
       
            <div className='headerText'></div>
            <div className='spacer'></div>
            <Link to='/' ><span className='text'>Go to Home</span></Link>
      
    </div>
      <Outlet />
    </>
  )
}

export default Banner
