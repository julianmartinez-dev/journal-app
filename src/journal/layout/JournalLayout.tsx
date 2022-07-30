import { Box, Toolbar } from "@mui/material";
import { NavBar, Siderbar } from '../components';

interface Props {
    children: React.ReactNode;
}

const drawerWidth = 240;


export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />

      <Siderbar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
