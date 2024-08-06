import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import imagelogo from '../Asset/logo.png';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'white' }}>
          {/* Logo */}
          <ScrollLink to="/" style={{ textDecoration: 'none' }}  smooth={true} duration={1000}>
            <img src={imagelogo} alt='logo' className='logo' />
          </ScrollLink>
          
          {/* Desktop Links */}
          <Stack direction='row' sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'space-evenly', color: 'black' }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'black' }}>HOME</RouterLink>
            <ScrollLink to="about" smooth={true} duration={1000} style={{ textDecoration: 'none', color: 'black', cursor:'pointer' }}>ABOUT US</ScrollLink>
            <ScrollLink to="events" smooth={true} duration={1000} style={{ textDecoration: 'none', color: 'black', cursor:'pointer' }}>EVENTS</ScrollLink>
            <ScrollLink to="classes" smooth={true} duration={1000} style={{ textDecoration: 'none', color: 'black', cursor:'pointer' }}>CLASSES</ScrollLink>
            <RouterLink to="/media" style={{ textDecoration: 'none', color: 'black' }}>GALLERY</RouterLink>
          </Stack>

          {/* Mobile Menu Icon */}
          <Stack direction='row' sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" sx={{ color: 'black' }} onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
              PaperProps={{
                sx: {
                  width: '250px',
                },
              }}
            >
              <MenuItem onClick={closeMenu}>
                <ScrollLink to="/" smooth={true} duration={1500} style={{ textDecoration: 'none', color: 'black' }}>HOME</ScrollLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <ScrollLink to="about" smooth={true} duration={1500} style={{ textDecoration: 'none', color: 'black' , cursor:'pointer' }}>ABOUT US</ScrollLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <ScrollLink to="events" smooth={true} duration={1500} style={{ textDecoration: 'none', color: 'black' , cursor:'pointer' }}>EVENTS</ScrollLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <ScrollLink to="classes" smooth={true} duration={1500} style={{ textDecoration: 'none', color: 'black' , cursor:'pointer' }}>CLASSES</ScrollLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <RouterLink to="/media" style={{ textDecoration: 'none', color: 'black' }}>GALLERY</RouterLink>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;