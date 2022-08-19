import { authState } from "../../src/store/auth";

export const initialState : authState = {
  status: 'checking',
  uid: null,
  email: null,
  photoURL: null,
  errorMessage: null,
  displayName: null,
};

export const authenticatedState : authState = {
  status: 'authenticated',
  uid: '123ABC',
  email: "test@test.com",
  photoURL: "https://test.jpg",
  errorMessage: null,
  displayName: "Test User",
};

export const notAuthenticatedState : authState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  photoURL: null,
  errorMessage: null,
  displayName: null,
};

export const testUser ={
    uid: '123ABC',
    email: "test@test.com",
    displayName: "Test User",
    photoURL: "https://test.jpg",
}