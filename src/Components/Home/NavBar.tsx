import React from 'react';
import { AppBar, Toolbar, IconButton,  Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src="../../Images/logo.png" alt="Marvel logo" />
        </IconButton>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/series">Series</Button>
        <Button color="inherit" component={Link} to="/characters">Characters</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;