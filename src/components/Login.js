import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [IsSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  return (
    <div>
      <Header/>
      <div>
        <img className='absolute opacity-80' src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        />
      </div>
      <form className='p-10 bg-black absolute w-3/12 my-44 mx-auto left-0 right-0 text-white bg-opacity-70'>
          <h1 className='p-2 font-bold text-lg'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!IsSignInForm && <input className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='text' placeholder='Name'/>}
          <input className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='text' placeholder='Email'/>
          <input className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='password' placeholder='Password'/>
          <button className='my-6 p-2 bg-red-700 w-full rounded-sm opacity-80'>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign up Now" : "Already have an account? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login