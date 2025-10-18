import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config';
import { useState } from 'react';

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState('');


  const handleGoogleSignIn = () => {
    // console.log('clicked');
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
     .then(() => {
      console.log('sign out');
      setUser('')
     })
     .catch(error => {
      console.log(error)
     })
  }


  return (
    <div className='min-h-screen text-center'>
     <button onClick={() => handleGoogleSignIn()}
             className='btn btn-info mt-6'>
              Sign In
     </button>
     <button onClick={() => handleGoogleSignOut()}
             className='btn btn-info mt-6'>
              Sign Out
     </button>
      <p><span className='text-green-600'>{user.displayName}</span></p>
      <p><span>{user.email}</span></p>
      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default SignIn