import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
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
              <Button variant="contained" color="primary" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                sx={{ display: 'flex', gap: 1 }}
                variant="contained"
                color="primary"
                fullWidth
              >
                <Google />
                <Typography variant="body2">Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent={'end'} marginTop={2}>
            <Link underline='none' component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
