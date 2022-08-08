import { AnyAction } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FirebaseAuth } from "../firebase";
import { RootState } from "../store";
import { login, logout } from "../store/auth";
import { startLoadingnotes } from "../store/journal";

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(login({ uid, email, photoURL, displayName }));
        dispatch(startLoadingnotes() as unknown as AnyAction);
      } else {
        dispatch(logout({ errorMessage: null }) as unknown as AnyAction);
      }
    });
  }, []);

  return {
    status,
  }
  
}
