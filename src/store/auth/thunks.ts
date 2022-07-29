import { Action, Dispatch } from "@reduxjs/toolkit"
import { checkingCredentials, login, logout } from "./authSlice"
import { signInWithGoogle } from '../../firebase';

export const checkingAuthentication = (email: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = (email?: string, password?: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if(!result?.ok) return dispatch(logout({ errorMessage: result?.errorMessage }));
    dispatch( login( result ))
  };
};