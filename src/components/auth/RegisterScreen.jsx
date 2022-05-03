import React from 'react'
import { Link } from 'react-router-dom';
import 'animate.css';

const RegisterScreen = () => {
  return (
    <div className=" animate__animated animate__fadeIn">
      <h3 className="mb-5 text-center">Registrar</h3>
      <form>
        <div className="auth__form">
          <label htmlFor="nombre" className="mr-1 auth__form-label mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            className="auth__form-input"
            autoComplete="off"
          />
        </div>
        <div className="auth__form">
          <label htmlFor="email" className="mr-1 auth__form-label mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            className="auth__form-input"
            autoComplete="off"
          />
        </div>

        <div className="mt-1 auth__form">
          <label htmlFor="password" className="mr-1 auth__form-label mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            className="auth__form-input"
          />
        </div>

        <div className="mt-1 auth__form">
          <label
            htmlFor="repetir-password"
            className="mr-1 auth__form-label mb-1"
          >
            Repetir Password
          </label>
          <input
            type="password"
            id="repetir-password"
            placeholder="Repetir Password"
            className="auth__form-input"
          />
        </div>

        <button type="submit" className="auth__button mb-5">
          Registrar
        </button>
      </form>

      <Link to="/auth/login" className="link mt-5">
        Iniciar Sesion
      </Link>
    </div>
  );
}

export default RegisterScreen