import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Typography, Stack, Menu, MenuItem } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Title for mobile screens */}
        <IconButton
          size='large'
          color='inherit'
          edge='start'
          aria-label='logo'
          sx={{ color: 'pink', display: { xs: 'flex', md: 'none' } }}
          onClick={() => navigate('/')}
        >
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'black' }}>
          My Web
        </Typography>
        {/* Mobile menu toggle */}
        <Stack direction='row' spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            color='inherit'
            edge='start'
            aria-label='menu'
            onClick={openMenu}
          >
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
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>HOME</Link>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <Link to="about" style={{ textDecoration: 'none', color: 'black' }}>ABOUT US</Link>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <Link to="events" style={{ textDecoration: 'none', color: 'black' }}>EVENTS</Link>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <Link to="classes" style={{ textDecoration: 'none', color: 'black' }}>CLASSES</Link>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <Link to="gallery" style={{ textDecoration: 'none', color: 'black' }}>GALLERY</Link>
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
