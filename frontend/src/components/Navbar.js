import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import Logout from './Logout'
// import { Link } from 'react-router-dom'
const Navbar = () => {
    const {userInfo,setUserInfo,loggedIn}=useContext(UserContext)
  return (
    <div><header
    class="font-mono inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                    <img class="h-7 w-auto" src="https://www.reshot.com/preview-assets/icons/39XGS2UZLY/logout-39XGS2UZLY.svg" alt=""/>
                    <p class="sr-only text-black">Website Title</p>
                </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    to="/">Password Manager</Link>
                
            </div>
            {localStorage.getItem('username')===''&&
            <div class="flex items-center justify-end gap-3">
                <Link class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    to="/register">Sign up</Link>
                <Link class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to="/login">Login</Link>
            </div>
}           {localStorage.getItem('username')&&
            <div class="flex items-center justify-end gap-3">
                <Link class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    to="/home">Dashboard</Link>
                <Link class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to="/newdata">Add new data</Link>
                <div class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    >{<Logout/>}</div>
                
                
            </div>
}
        </div>
    </div>
</header></div>
  )
}

export default Navbar