import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { FormEvent, useMemo } from 'react';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export const LoginPage = () => {

  const { status } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'julian.fmartinez@gmail.com',
    password: '123456',
  })

  // if status never changes, it will not re-render
  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(checkingAuthentication(email!, password!) as unknown as AnyAction);
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn(email!, password!) as unknown as AnyAction);
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
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
