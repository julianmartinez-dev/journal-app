import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Para cualquier otra ruta que no sea login o registeer, redirigir a la ruta de login */}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
