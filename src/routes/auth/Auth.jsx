import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./Auth.scss";

const Auth = () => {
  return (
    <div className='auth'>
        <Link to="/">Home</Link>
       <div className='form-container'>
        <Outlet/>
       </div>
    </div>
  )
}

export default Auth