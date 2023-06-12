import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/NoCrash';
import { useNavigate, useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import '../App.css';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideNav() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const navigation = useNavigate();

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuLogout = () => {
    localStorage.removeItem("token");
    navigation('/login');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {/* style={index === 1 ? styles.active : ''} */}
            <ListItem disablePadding className = {location.pathname === "/list-car" ? "active": ""}  onClick={ () => navigation('/list-car') }>
              <ListItemButton>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Cars" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className = {location.pathname === "/car/category" ? "active": ""} onClick={ () => navigation('/car/category') } >
              <ListItemButton>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Category" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={handleMenuLogout}>
              <ListItemButton>
                <ListItemIcon>
                   <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
