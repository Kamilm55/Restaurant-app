import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ConditionalForm from './ConditionalForm';
import Nav from '../../Nav'
import Footer from '../../Footer'

const Login = () => {
    const [ user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : {});
    const isRegister = false;

    useEffect(()=>{
      localStorage.setItem('currentUser' , JSON.stringify(user));
    },[user])

  return (
    <>
       <nav><Nav/></nav>
    <div className='loginPage content100vh'>
    <header><h1>LOGIN</h1></header>

    <main>
        <ConditionalForm isRegister={isRegister}  formikValues={user} setValues={setUser}/>
        <p>If you don't have account</p>
        <Link to='/register' className='link' >Sign up</Link>
    </main>

    </div>
        <footer><Footer/></footer>
    </>
  )
}

export default Login