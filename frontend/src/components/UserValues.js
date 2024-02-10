import React from 'react'
import '../App.css'
const UserValues = ({_id,username,password}) => {
  return (
    <>
    <div className="bg-slate-500 text-white font-semibold mx-auto text-center p-5">{username}</div>
    </>
  )
}

export default UserValues