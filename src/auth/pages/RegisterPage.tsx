import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear una cuenta">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>
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
            justifyContent="center"
            marginTop={2}
          >
            <Grid item xs={12} paddingLeft={'16px'}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
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
