import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AC'

const Nav = () => {
  const {currentUser} = useContext(AuthContext)


  
  return (
    <div className='navbar'>
      <span className="logo">diver<span className="logo-sea">sea</span></span>
      <div className="profile">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
export default Nav