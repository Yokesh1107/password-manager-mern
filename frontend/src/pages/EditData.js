import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {toast,Bounce} from 'react-toastify'
const EditData = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [social,setSocial]=useState('')
    const [userid,setUserid]=useState('')
    const [password,setPassword]=useState('')
    useEffect(()=>{
        if(document.cookie.length<=13){
            navigate('/login')
           }
        fetch('https://passwordmanage.onrender.com/data/edit/'+id).then(response=>{response.json().then(results=>{
            setSocial(results.social)
            setUserid(results.userid)
            setPassword(results.password)
        })
    })
    },[])
    
    const handleSubmit=async()=>{
        
        const res=await fetch('https://passwordmanage.onrender.com/data/update',{
            method:'PUT',
            body:JSON.stringify({id,userid,social,password}),
            headers:{'Content-type':'application/json'},
            credentials:'include',
        })
        if(res.status==200){
            toast.success('Updated successful', {
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
    <div className="">
        
        <div class="font-mono mx-auto my-auto md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div class="max-w-xl w-full space-y-12">
              <div class="lg:text-left text-center">
          
                <div class="flex items-center justify-center  ">
                  <div class="shadow-2xl shadow-white  bg-gradient-to-r from-cyan-950  to-cyan-600  flex flex-col w-80 border border-gray-900 rounded-lg px-12 py-10">
                  
                  
                 <label class="font-bold text-lg text-white mb-2 " >Social Media Name</label> 
                 <input type="text" formControlName="accnum" value={social} placeholder="Social media" class=" border rounded-lg py-3 px-3 mb-4 bg-black border-white-600 placeholder-white-500 text-white" onChange={(e)=>setSocial(e.target.value)}/>
                  <label class="font-bold text-lg text-white mb-2" >User Id</label> 
                  <input type="text" formControlName="amount" value={userid} placeholder="User Id" onChange={(e)=>setUserid(e.target.value)} class="border rounded-lg py-3 px-3 mb-4 bg-black border-white-600 placeholder-white-500 text-white"/>
                  <label class="font-bold text-lg text-white mb-2">Password</label> 
                  <input type="password" formControlName="pin" value={password} placeholder="******" onChange={(e)=>setPassword(e.target.value)} class="mb-9 border rounded-lg py-3 px-3 bg-black border-white-600 placeholder-white-500 text-white"/>
                  <button onClick={handleSubmit}  class="relative inline-flex items-center justify-center px-5 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"><span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Edit </span></button>
                  
                 
                </div>
                </div>
              
            </div>
              
            </div>
            </div>
        
    </div>
  )
}

export default EditData