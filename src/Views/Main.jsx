import React from 'react'
import Sidebar from '../Components/Side'
import Chat from '../Components/ChatFront'

const Home = () => {
  return (
    <div className='mainChat'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home