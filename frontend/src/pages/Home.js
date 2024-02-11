import React, { useContext, useEffect, useState } from 'react'
import UserValues from '../components/UserValues'
import { UserContext } from '../components/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import Logout from '../components/Logout'
import Password from '../components/Password'
import Data from './Data'
const Home = () => {
    const {userInfo,setUserInfo} =useContext(UserContext)
    const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState([])
    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookie[key.trim()] = value;
        })
        return (cookie[cookieName]);
      }
      const username=localStorage.getItem('username')
      console.log(document.cookie)
    useEffect(()=>{
        
        if(username===null){
            navigate('/login')
           }
        const res=fetch('https://passwords-yo4c.onrender.com/data/'+username,{
            method:'GET',
            credentials:'include',
            
        }).then(response=>{
            response.json().then(userDetails=>{
                setUserDetails(userDetails)
            })
        })
    },[])
    
   
    return (
        <>
        <div className="text-center text-white mx-auto my-6 text-2xl font-mono">Welcome ,<span className="shadow-black drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold ">{username}</span></div>
        <div className="font-mono grid grid-cols-3 md:mx-auto  overflow-hidden">
        
    {userDetails.map(userDetail=>(
        <div className="p-10 mx-auto">
        <Password {...userDetail}/>
        </div>
    )
    
  )}
  <div className="my-28 mx-28 "><Link to='/newdata' class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"><span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Add new Data</span></Link></div>
  
  </div>
  </>
  )
}

export default Home