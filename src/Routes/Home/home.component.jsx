import React from 'react'
import '@passageidentity/passage-auth'

const Home = () => {
  return (
    <div className='home-div'>
       <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
    </div>
  )
}

export default Home
