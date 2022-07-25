import { Grid, Typography } from "@mui/material";


interface Props{
    children: React.ReactNode;
    title?: string
}
export const AuthLayout = ({ children, title } : Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 500 } }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          { title }
        </Typography>
        { children }
      </Grid>
    </Grid>
  );
}
