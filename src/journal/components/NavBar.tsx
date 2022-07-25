import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

interface Props {
    drawerWidth: number;
}

//DrawerWidth is the width of the sidebar

export const NavBar = ({ drawerWidth }: Props) => {
  return (
    <AppBar
      position="fixed"
      sx=
      {{ 
        width: { sm: `calc(100% - ${drawerWidth}px)` } ,
        ml: { sm: `${drawerWidth }px` }
      }}
    >
      <Toolbar>
        <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx= {{ mr: 2, display: { sm: 'none' }}}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent='space-between' alignItems={'center'}>
            <Typography variant='h6' noWrap component='div'> Journal APP </Typography>
            <IconButton color="error">
                <LogoutOutlined />
            </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
