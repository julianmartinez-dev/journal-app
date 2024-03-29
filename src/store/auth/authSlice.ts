import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type IStatus = 'checking' | 'not-authenticated' | 'authenticated'

interface authState {
  status: IStatus;
  uid?: string | null;
  email?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
  displayName: string | null;
}

// Define the initial state using that type
const initialState: authState = {
  status: 'checking',
  uid: null,
  email: null,
  photoURL: null,
  errorMessage: null,
  displayName: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     login: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      state.status = 'authenticated';
      state.uid = uid;
      state.email = email;
      state.photoURL = photoURL;
      state.displayName = displayName;
      state.errorMessage = null;
     },

     logout: (state, { payload }) => {
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload.errorMessage;
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