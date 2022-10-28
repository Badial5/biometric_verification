import React from 'react'
import { Link, Outlet } from 'react-router-dom'


import "./banner.styles.scss"

const Banner = () => {
  return (
    <>
    <div className="mainHeader">
          <Link to="/" className='calogo'> Calvin Logo</Link>
        <Link to='/'>  <div className='passageLogo'></div></Link>
            <div className='headerText'>This is the Navigation Bar</div>
            <div className='spacer'></div>
            <Link to='/' ><span className='text'>Go to Passage</span></Link>
      
    </div>
      <Outlet />
    </>
  )
}

export default Banner
