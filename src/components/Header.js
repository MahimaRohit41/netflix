import React, {useEffect} from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, USER_AVATAR } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

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
      <div className='m-2 p-2 flex'>
        <button className='py-2 px-4 mx-4 text-white bg-gray-700 rounded-md' onClick={handleGPTSearchClick}>GPT Search</button>
      <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={USER_AVATAR}
          />
        <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header