import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import { UserContext } from '../components/UserContext'
import {toast,Bounce} from 'react-toastify'

const Data = () => {
    const navigate=useNavigate()
    const {userInfo,loggedIn}=useContext(UserContext)
    const[redirect,setRedirect]=useState(false)
    const [socialmedia,setSocialmedia]=useState('')
    const [userid,setUserid]=useState('')
    const [password,setPassword]=useState('')
    useEffect(()=>{
       if(document.cookie.length<=13){
        navigate('/login')
       }
        
    },[])
    const handleSocial=(e)=>{
        e.preventDefault()
        setSocialmedia(e.target.value)
    }
    const handleUserid=(e)=>{
        e.preventDefault()
        setUserid(e.target.value)
    }
    const handlePassword=(e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookie[key.trim()] = value;
        })
        return (cookie[cookieName]);
      }
      const username=getCookie("user")
    const handleSubmit=async(e)=>{
        const res=await fetch('https://passwords-yo4c.onrender.com/data/new/'+username,{
            method:'POST',
            body:JSON.stringify({socialmedia,userid,password}),
            credentials:'include',
            headers:{'Content-type':'application/json'},
        })
        if(res.status===200){
            toast.success('Data added successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            navigate('/home')
        }
    }

  return (
    <div className="">
        
        <div class="font-mono mx-auto my-auto md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div class="max-w-xl w-full space-y-12">
              <div class="lg:text-left text-center">
          
                <div class="flex items-center justify-center  ">
                  <div class="shadow-2xl shadow-white  bg-gradient-to-r from-cyan-950  to-cyan-600  flex flex-col w-80 border border-gray-900 rounded-lg px-12 py-10">
                  
                  
                 <label class="font-bold text-lg text-white mb-2 " >Social Media Name</label> 
                 <input type="text" formControlName="accnum" placeholder="Social media" class=" border rounded-lg py-3 px-3 mb-4 bg-black border-white-600 placeholder-white-500 text-white" onChange={handleSocial}/>
                  <label class="font-bold text-lg text-white mb-2" >User Id</label> 
                  <input type="text" formControlName="amount" placeholder="User Id" onChange={handleUserid} class="border rounded-lg py-3 px-3 mb-4 bg-black border-white-600 placeholder-white-500 text-white"/>
                  <label class="font-bold text-lg text-white mb-2">Password</label> 
                  <input type="password" formControlName="pin" placeholder="******" onChange={handlePassword} class="mb-9 border rounded-lg py-3 px-3 bg-black border-white-600 placeholder-white-500 text-white"/>
                  <button onClick={handleSubmit}  class="relative inline-flex items-center justify-center px-5 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"><span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Add </span></button>
                  
                 
                </div>
                </div>
              
            </div>
              
            </div>
            </div>
        
    </div>
  )
}

export default Data