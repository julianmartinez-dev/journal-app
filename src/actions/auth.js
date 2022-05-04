import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';

//Crear nuevo usuario con email y contraseña
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {

    dispatch(startLoading())    
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error)
    }
    finally {
      dispatch(finishLoading());
    }
  };
};

//Crear nuevo usuario con google
export const startRegisterEmailPassword =   (email, password, name) => {

  return async (dispatch) => {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    dispatch(login(user.uid, user.displayName));
    
  };
};


//Login con google
export const startGoogleLogin = () => {
  return async (dispatch) => {
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, googleAuthProvider)
    console.log(user)
    dispatch(login(user.uid, user.displayName));
  };
};



//Action para login de redux
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
