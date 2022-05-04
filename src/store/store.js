import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';
import uiReducer from '../reducers/uiReducer';

export const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer },
  middleware: [thunk], //si no funciona aplicar getDefaultMiddleware
});
