import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { FormEvent, useMemo } from 'react';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

export const LoginPage = () => {

  const { status } = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const dispatch = useDispatch();

  // if status never changes, it will not re-render
  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn() as unknown as AnyAction);
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password} = data;
    dispatch(checkingAuthentication(email, password) as unknown as AnyAction);
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
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

          <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="center"
            marginTop={2}
            paddingLeft={'16px'}
          >
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isAuthenticated}
              >
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                sx={{ display: 'flex', gap: 1 }}
                variant="contained"
                color="primary"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
              >
                <Google />
                <Typography variant="body2">Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent={'end'} marginTop={2}>
            <Link
              underline="none"
              component={RouterLink}
              color="inherit"
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
