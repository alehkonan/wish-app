import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material';

export const Layout: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, zIndex: 1200 }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Мои 100 желаний
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      >
        <Box sx={{ width: 250 }} onClick={() => setMenuOpen(false)}>
          <List>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItemButton selected={pathname === '/'}>
                <ListItemText primary="Главная" />
              </ListItemButton>
            </Link>
            <Link to="game">
              <ListItemButton selected={pathname === '/game'}>
                <ListItemText primary="Игра" />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </SwipeableDrawer>
      <Box sx={{ padding: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
