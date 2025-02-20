import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validateData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE } from '../utils/constants';

const Login = () => {
  const [IsSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  const handleButtonClick = () => {
    //Validate form data
    const message = validateData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message)
      return;

    if(IsSignInForm)
    {
      //Sign In API
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage)
      });

    }
    else{
      //Sign Up API
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          const { uid, email , displayName } = auth.currentUser;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage);
      });

    }
  }

  return (
    <div>
      <Header/>
      <div>
        <img className='absolute opacity-80' src={BG_IMAGE}
        alt="logo"
        />
      </div>
      <form onSubmit={ (e) => e.preventDefault() } className='p-10 bg-black absolute w-3/12 my-44 mx-auto left-0 right-0 text-white bg-opacity-70'>
          <h1 className='p-2 font-bold text-lg'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!IsSignInForm && <input ref={name} className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='text' placeholder='Name'/>}
          <input ref={email} className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='text' placeholder='Email'/>
          <input ref={password} className='my-2 p-2 w-full bg-gray-700 rounded-sm opacity-80' type='password' placeholder='Password'/>
          { errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <button className='my-6 p-2 bg-red-700 w-full rounded-sm opacity-80' onClick={handleButtonClick}>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign up Now" : "Already have an account? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;