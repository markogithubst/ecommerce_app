import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Logo from '../../images/logo.png';

import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  backgroundColor: '#E9CBAF'
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function PersistentDrawerLeft ({ _children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(window.location.pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
    setActiveButton(window.location.pathname);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Hidden mdUp>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <img alt='Logo' src={Logo} style={{ height: '30px' }}/>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smDown>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Link
              to='/'
              style={{ color: 'white' }}
              onClick={() => setActiveButton('/')}
            >
              <img alt='Logo' src={Logo} style={{ height: '30px' }}/>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            {[
              { text: 'Home', route: '/' },
              { text: 'Order', route: '/order' }
            ].map(({ text, route }) => (
              <Link
                to={route}
                style={{ color: '#4A4D59', textDecoration: 'none', marginLeft: '1rem' }}
                key={text}
                onClick={() => setActiveButton(route)}
              >
                <Button color="inherit" style={{ border: activeButton === route ? '1px solid #4A4D59' : 'none' }}>
                  {text}
                </Button>
              </Link>
            ))}

            {[{ text: 'Logout', route: '/logout' }].map(({ text, route }) => (
              <Link
                to={route}
                style={{ color: '#4A4D59', textDecoration: 'none', marginLeft: '1rem' }}
                key={text}
                onClick={() => setActiveButton(route)}
              >
                <Button color="inherit" style={{ border: activeButton === route ? '1px solid #4A4D59' : 'none' }}>{text}</Button>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
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
          {[
            { text: 'Home', route: '/' },
            { text: 'Order', route: '/order' }
          ].map(({ text, route }) => (
            <ListItem key={text} disablePadding>
              <Link to={route} style={{ color: '#202120' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{ text: 'Logout', route: '/logout' }].map(({ text, route }) => (
            <ListItem key={text} disablePadding>
              <Link to={route} style={{ color: '#202120' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
}
