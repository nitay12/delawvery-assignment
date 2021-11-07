import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../assets/logo.svg";
import { Link } from '@mui/material';

export default function ManuBar(props) {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flex: 1 }}>
            {props.title}
          </Typography>
          <Link>
          <img src={logo} alt="logo" height="35px" />
          </Link>
        </Toolbar>
      </AppBar>
  );
}
