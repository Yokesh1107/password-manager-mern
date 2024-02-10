import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer,toast } from 'react-toastify'
import { UserContext } from '../components/UserContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
const Login = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {userInfo,setUserInfo,loggedIn,setLoggedIn,id,setId}=useContext(UserContext)
    const handleUser=(e)=>{
      e.preventDefault()
      setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
      e.preventDefault()
      setPassword(e.target.value)
    }
    const handleSubmit=async(e)=>{
      const res=await fetch('http://localhost:2003/auth/login',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-type':'application/json'},
        credentials:'include',
      })
      if(res.status===200){
        setUserInfo({username:username,password:password})
        setLoggedIn(true)
        toast.success('Log in successful', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition:Bounce,
         
          });
         setTimeout(function(){navigate('/home')},2000)
      }
    }
    return (
      <div
    class="relative mx-auto my-32 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 font-mono">
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p class="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div class="mt-5">
           
                <div class="relative mt-6">
                    <input type="text" name="username" id="username" placeholder="USER NAME" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" onChange={handleUser} />
                    <label for="username" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">USER NAME</label>
                </div>
                <div class="relative mt-6">
                    <input type="password" onChange={handlePassword} name="password" id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">PASSWORD</label>
                </div>
                <div class="my-6">
                    <button type="submit" onClick={handleSubmit} class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <Link to='/register'
                        class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                        up
                    </Link>.
                </p>
            
        </div>
    </div>
</div>
    );
}

export default Login