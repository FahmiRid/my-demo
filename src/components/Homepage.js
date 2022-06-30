import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
//import { Gallery } from './Slide3';
import { useState } from 'react'

// import Photo from './Photo';
// import { Avatar } from '@mui/material';
// import { Stack } from '@mui/material';
// import Link from '@mui/material/Link';



export default function ButtonAppBar() {
  const [home, setHome] = useState("This is Homepage");
    const history = useHistory();

    
  return (
    <div>
         {/* <React.Fragment>  for calling another js into 1 page 
          
        </React.Fragment>   */}
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
             
          <Button onClick={ () => {
              const path = {
                  pathname: "/SignUp"
              };
              history.push(path)}} color="inherit">Sign Up</Button>
    
        </Toolbar>
      </AppBar>
    </Box>
        <h1 style={{marginLeft: "44%"}}>Home {home}</h1>
      


        
    </div>
        
  );  
}
