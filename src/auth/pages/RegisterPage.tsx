import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Typography, Link, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout"
// import { useForm } from '../../hooks/useForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { RootState } from "../../store";
import { AnyAction } from "@reduxjs/toolkit";
import { useMemo } from "react";

interface IFormInput {
  name: string;
  password: string;
  email: string;
}

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector((state: RootState) => state.auth);

  const isCheckingAuthentication = useMemo( () => {
    return status === 'checking';
  },[status])

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({name, password, email}) => {
    dispatch(
      startCreatingUserWithEmailPassword(
        email,
        name,
        password
      ) as unknown as AnyAction
    );
  }
 

  return (
    <AuthLayout title="Crear una cuenta">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="John Doe"
              fullWidth
              {...register('name', {
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              {...register('email', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El correo no es valido',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid container direction="row" justifyContent="center" marginTop={2}>
            {errorMessage && (
              <Grid item xs={12} paddingLeft={'16px'} paddingBottom={'16px'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}

            <Grid item xs={12} paddingLeft={'16px'}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent={'end'} marginTop={2}>
            <Link
              underline="none"
              component={RouterLink}
              color="inherit"
              to="/auth/login"
            >
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
}
