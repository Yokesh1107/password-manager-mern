import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
    const {loggedIn,setLoggedIn,setUserInfo,userInfo}=useContext(UserContext)
    const handleLogout=async()=>{
        setLoggedIn(false)
        setUserInfo({})
        
        const res=await fetch('http://localhost:2003/auth/logout',{
            method:'POST',
            credentials:'include',

        })
        window.location.reload()
         navigate('/login')
    }
  return (
    <div><button onClick={handleLogout}>Logout</button></div>
  )
}

export default Logout