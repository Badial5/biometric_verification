import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import Home from './Routes/Home/home.component'
import Dashboard from './Components/Dashboard/dashboard.component'
import Banner from './Components/Banner/banner.component'
import Footer from './Components/Footer/Footer.component'
//css
import "./App.scss"


const App = () => {
  return (
    <>
    <div>
      <Banner />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
            <Route path='dashboard' element={<Dashboard />}></Route>

          
        </Routes>
      </div>

      

    </div>

    <Footer />

    </>
  )
}

export default App
