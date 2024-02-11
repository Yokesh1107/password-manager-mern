import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
    const {loggedIn,setLoggedIn,setUserInfo,userInfo}=useContext(UserContext)
    const handleLogout=async()=>{
        setLoggedIn(false)
        setUserInfo({})
        localStorage.setItem('username','')
        
        const res=await fetch('https://passwords-yo4c.onrender.com/auth/logout',{
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