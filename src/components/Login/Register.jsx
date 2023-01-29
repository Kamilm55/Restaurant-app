import React, { useEffect, useState } from 'react'
import ConditionalForm from './ConditionalForm';
import { Link } from 'react-router-dom'
import Nav from '../../Nav'
import Footer from '../../Footer'

const Register = () => {
  const [formikValues , setValues] = useState(JSON.parse(localStorage.getItem('registerArr')) ?  [...JSON.parse(localStorage.getItem('registerArr'))] : []) ;
  const isRegister = true;

  useEffect(()=>{
    localStorage.setItem('registerArr' , JSON.stringify(formikValues));
  },[formikValues]);

  return (
    <>
       <nav><Nav/></nav>
    <div className='loginPage content100vh'>
       <header><h1>SIGN UP</h1></header>
       <main>
         <ConditionalForm isRegister={isRegister} formikValues={formikValues} setValues={setValues}/>
        <p>If you have already account</p>
        <Link to='/login' className='link' >Sign in</Link>
        </main>
    </div>
        <footer><Footer/></footer>
    </>
  )
}

export default Register