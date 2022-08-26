import { Action, Dispatch } from "@reduxjs/toolkit"
import { checkingCredentials, login, logout } from "./authSlice"
import { loginWithEmailPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle } from '../../firebase';

export const checkingAuthentication = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if(!result?.ok) return dispatch(logout({ errorMessage: result?.errorMessage }));
    dispatch( login( result ))
  };
};

export const startCreatingUserWithEmailPassword  = (email: string, displayName: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(checkingCredentials());

    const resp = await registerWithEmailPassword({email, displayName, password})
    if(!resp?.ok) return dispatch(logout({ errorMessage: resp?.errorMessage }));
    
    dispatch( login( resp ))
  }
}

export const startSignInWithEmailPassword = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(checkingCredentials());

    const resp = await loginWithEmailPassword(email, password);
    if(!resp?.ok) return dispatch(logout({ errorMessage: resp?.errorMessage }));
    
    dispatch( login( resp ))
  }
}

export const startLogout = () => {
  return async (dispatch: Dispatch<Action>) => {
    await logoutFirebase();

    dispatch( logout({errorMessage: null}) )
  }
}

