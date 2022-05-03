import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const LoginScreen = () => {
  return (
    <div className=" animate__animated animate__fadeIn">
      <h3 className="mb-5 text-center">Login</h3>
      <form>
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

        <button type="submit" className="auth__button">
          Login
        </button>

        <hr />
        <div className="mt-5 mb-5">
          <p className="text-center auth__form-label">
            Login with social networks
          </p>
          <div className="google-btn mt-5">
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
          Register
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
