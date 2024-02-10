import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { redirect } from 'react-router-dom'
import {toast,Bounce} from 'react-toastify'
import { Link } from 'react-router-dom'
const Password = ({_id,social,userid,password}) => {
    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookie[key.trim()] = value;
        })
        return (cookie[cookieName]);
      }
      const username=getCookie("user")
    const {userInfo}=useContext(UserContext)
    const handleEdit=()=>{

    }
    const handleSubmit=async(e)=>{
        const res=await fetch('http://localhost:2003/data/delete/'+username,{
            method:'PUT',
            body:JSON.stringify({social,userid,password}),
            headers:{'Content-type':'application/json'},
        })
        if(res.ok){
            toast.success('Data deleted successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "dark",
                transition: Bounce,
            });
            setTimeout(function(){ window.location.reload(); }, 2000)
            // redirect('/')
        }
    }
    const pass=password
    
    
  return (
    <div class="bg-white overflow-hidden  shadow-black shadow-xl rounded-lg border w-80 hover:scale-110 hover:transition">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 text-center">
            User Data
        </h3>

    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-extrabold text-black">
                    Social Media
                </dt>
                <dd class="mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2">
                    {social}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-extrabold text-black">
                    User Id
                </dt>
                <dd class="mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2">
                    {userid}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-extrabold text-black">
                    Password
                </dt>
                <dd class="mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2">
                    {pass}
                </dd>
            </div>
            <div className="text-right flex justify-around">
            <Link to={`/edit/${_id}`} class="relative inline-flex items-center justify-center px-7 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"><span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Edit</span></Link>
            <button onClick={handleSubmit} class="relative inline-flex items-center justify-center px-7 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"><span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Delete</span></button>
            </div>
           
        </dl>
    </div>
</div>
  );
}

export default Password