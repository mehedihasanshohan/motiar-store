import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  
  const handleGoogleSignIn = () => {
    // console.log('clicked');
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='min-h-screen text-center'>
     <button onClick={() => handleGoogleSignIn()}
             className='btn btn-info mt-6'>Sign In</button>

    </div>
  )
}

export default SignIn