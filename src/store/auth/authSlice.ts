import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type IStatus = 'checking' | 'not-authenticated' | 'authenticated'

interface authState {
  status: IStatus;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
  name: string | null;
}

// Define the initial state using that type
const initialState: authState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  name: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     login: (state, action) => {
      const { uid, email, displayName, photoURL, name } = action.payload;
      state.status = 'authenticated';
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.name = name;
      state.errorMessage = null;
     },

     logout: (state, action) => {
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = action.payload.errorMessage;
     },

     checkingCredentials: (state) => {
        state.status = 'checking'
        state.errorMessage = null;
     },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer