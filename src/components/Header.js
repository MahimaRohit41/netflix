import React, {useEffect} from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email , displayName } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe will be calles when component unmounts
    return () => unSubscribe()
  },[]);

  return (
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-44' src={NETFLIX_LOGO}
      alt="logo"
      />
      <div className='m-2 p-2'>
        <button className='text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header