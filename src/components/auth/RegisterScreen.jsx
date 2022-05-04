import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import 'animate.css';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, setError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';




const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){
      dispatch(startRegisterEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if ([name, email, password, password2].includes('')) {
      dispatch(setError('Todos los campos son requeridos'));
      return false;
    }

    if (!validator.isEmail(email)) {
      dispatch(setError('El email es invalido'));
      return false;
    }

    if (password !== password2) {
      dispatch(setError('Las contraseñas no coinciden'));
      return false;
    }
    if (password.length < 6) {
      dispatch(setError('La contraseña debe tener al menos 6 caracteres'));
      return false;
    }

    dispatch(clearError());
    return true;
  };

  return (
    <div className=" animate__animated animate__fadeIn">
      <h3 className="mb-5 text-center">Registrar</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__form">
          <label htmlFor="nombre" className="mr-1 auth__form-label mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="name"
            placeholder="Tu nombre"
            className="auth__form-input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
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

        <div className="mt-1 auth__form">
          <label htmlFor="password2" className="mr-1 auth__form-label mb-1">
            Repetir Password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Repetir Password"
            className="auth__form-input"
            value={password2}
            onChange={handleInputChange}
          />
        </div>

        {
          msgError && <p className='msg-error'>{msgError}</p>
        }

        <button type="submit" className="auth__button mb-5">
          Registrar
        </button>
      </form>

      <Link to="/auth/login" className="link mt-5">
        Iniciar Sesion
      </Link>
    </div>
  );
};

export default RegisterScreen;
