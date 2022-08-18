import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { logout, startLogout } from '../../store/auth';
import { clearNotesLogout } from '../../store/journal';

interface Props {
    drawerWidth: number;
}

//DrawerWidth is the width of the sidebar
export const NavBar = ({ drawerWidth }: Props) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( clearNotesLogout() as unknown as AnyAction );
    dispatch( startLogout() as unknown as AnyAction );
  }

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
            <IconButton color="error" onClick={handleLogout}>
                <LogoutOutlined />
            </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
