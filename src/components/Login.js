import React from 'react'
//import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import loginIcon from './images/icon.png'
import uiLogin from './images/face.svg'
import './styles/Login.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
function Login() {

    const theme = createTheme();
    const history = useHistory();
  return (
    <div>
        
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button size='large'  onClick={ () => {
              const path = {
                  pathname: "/"
              };
              history.push(path)}} color="inherit">Home</Button>
               <Button size='large'  onClick={ () => {
              const path = {
                  pathname: "/Photo"
              };
              history.push(path)}} color="inherit">Users</Button>
              <Button size='large'  onClick={ () => {
              const path = {
                  pathname: "/Login"
              };
              history.push(path)}} color="inherit">Login</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          </Toolbar>
          </AppBar>
          </Box>
        <h1 style={{marginLeft: "44%"}}>Login</h1>
      
    </ThemeProvider>
    </div>
    
  );
}

export default Login