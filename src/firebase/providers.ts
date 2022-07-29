import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '.';
interface IRegisterWithGoogle {
  name: string;
  email: string;
  password: string;
}

// Provider: Google
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //User Info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      return {
        ok: false,
        errorCode,
        errorMessage,
      };
    }
  }
};


export const registerWithEmailPassword = async ({email, name, password} : IRegisterWithGoogle) => {

  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email, password);
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser!, { displayName: name });
    
    return {
      ok: true,
      uid,
      photoURL,
      name
    }

  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      return {
        ok: false,
        errorCode,
        errorMessage,
      };
    }
  }
}

export const loginWithEmailPassword = async (email: string, password: string) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      name: displayName
    }
  } catch (error) {
   if (error instanceof FirebaseError) {
     const errorCode = error.code;
     const errorMessage = error.message;
     // ...
     return {
       ok: false,
       errorCode,
       errorMessage,
     };
   }
  }
}
