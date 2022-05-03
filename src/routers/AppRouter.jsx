import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import LoginScreen from '../components/auth/LoginScreen';
import Layout from '../components/layout/Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/auth" element={<Layout />}>
            <Route index element={<LoginScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
          </Route>
        <Route path="/" element={<JournalScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
