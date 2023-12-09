import React from 'react';
import { AppBar, Toolbar, IconButton , Box, Button } from '@mui/material';
import { Link , useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png'; 
import {styled} from '@mui/system';
const Logo = styled('img')({
    height: '4%', // Adjust size as needed
    width: '7%', // Adjust size as needed
    position: 'fixed',
    top: '2%',
    left: '2%',
  });

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
          <Logo src={logo} alt="Marvel logo"/>
        </IconButton>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '20px',
              padding: '10px 20px',
              marginRight: '10px',
              '&:hover': {
                textDecoration: 'underline',
                color: 'red',
              },
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/characters"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '20px',
              padding: '10px 20px',
              '&:hover': {
                textDecoration: 'underline',
                color: 'red',
              },
            }}
          >
            Characters
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/series"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '20px',
              padding: '10px 20px',
              '&:hover': {
                textDecoration: 'underline',
                color: 'red',
              },
            }}
          >
            Series
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/graph"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '20px',
              padding: '10px 20px',
              '&:hover': {
                textDecoration: 'underline',
                color: 'red',
              },
            }}
          >
            Graph
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;