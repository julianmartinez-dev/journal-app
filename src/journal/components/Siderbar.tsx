import { LocalFireDepartment, TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';

interface Props{
    drawerWidth: number;
}

export const Siderbar = ({ drawerWidth } :Props) => {

  const {  displayName: name } = useSelector( (state: RootState) => state.auth);

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: 0 }}>
      <Drawer
        variant="permanent" //temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" textAlign={'center'}>
            {name || ''}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', ' Abril'].map((text, index) => (
            <ListItem disablePadding key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aut harum dolorum.`}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
