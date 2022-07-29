import { Action, Dispatch } from "@reduxjs/toolkit"
import { checkingCredentials, login, logout } from "./authSlice"
import { loginWithEmailPassword, registerWithEmailPassword, signInWithGoogle } from '../../firebase';

export const checkingAuthentication = (email: string, password: string) => {
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

export const startCreatingUserWithEmailPassword  = (email: string, name: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(checkingCredentials());

    const resp = await registerWithEmailPassword({email, name, password})
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