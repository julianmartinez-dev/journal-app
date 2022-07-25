import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type IStatus = 'checking' | 'not-authenticated' | 'authenticated'

interface authState {
  status: IStatus;
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  errorMessage?: string;
}

// Define the initial state using that type
const initialState: authState = {
  status: 'not-authenticated',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     login: (state, action) => {},
     logout: (state, action) => {},
     checkingCredentials: (state, action) => {},
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer