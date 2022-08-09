import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import { SideBarItem } from "./";

interface Props{
    drawerWidth: number;
}

export const Siderbar = ({ drawerWidth } :Props) => {

  const {  displayName: name } = useSelector( (state: RootState) => state.auth);
  const { notes } = useSelector((state: RootState) => state.journal);

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
          {notes.map((note) => (
            <SideBarItem key={note.id} note={note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
