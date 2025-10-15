import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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

  return (
    <div className='min-h-screen text-center'>
     <button onClick={() => handleGoogleSignIn()}
             className='btn btn-info mt-6'>Sign In</button>
      <p>Welcome! <span className='text-green-600'>{user.displayName}</span></p>
      <p>Your gmail is <span>{user.email}</span></p>
      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default SignIn