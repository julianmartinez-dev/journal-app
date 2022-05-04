import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, setError } from '../../actions/ui';
import { login, startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

const LoginScreen = () => {

  const dispatch = useDispatch()
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if( [email, password ].includes('')) {
      dispatch(setError('Todos los campos son requeridos'))
      return;
    }
    dispatch(clearError())
    dispatch(startLoginEmailPassword(email,password))
  }

  const handleGoogleLogin = (e) => {
    dispatch( startGoogleLogin() )
  }

  return (
    <div className=" animate__animated animate__fadeIn">
      <h3 className="mb-5 text-center">Iniciar Sesión</h3>
      <form onSubmit={handleLogin}>
        <div className="auth__form">
          <label htmlFor="email" className="mr-1 auth__form-label mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            className="auth__form-input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-1 auth__form">
          <label htmlFor="password" className="mr-1 auth__form-label mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu password"
            className="auth__form-input"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        {msgError && <p className="msg-error">{msgError}</p>}

        <button type="submit" className="auth__button" disabled={loading}>
          Ingresar
        </button>

        <div className="mt-5 mb-5">
          
          <div className="google-btn mt-5" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Registrarse
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
