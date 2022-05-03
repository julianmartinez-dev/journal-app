import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from '../components/auth/RegisterScreen'
import LoginScreen from '../components/auth/LoginScreen'


const AuthRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<LoginScreen />} />
          <Route path="/auth/register" element={<RegisterScreen />} />
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AuthRouter