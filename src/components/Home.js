import { useHistory } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from '@mui/material/Button';


export default function Home() {

    const history = useHistory();
    
  return (
  <div>
      <h1>Home Page</h1> 

        <br />
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Button onClick={() => {
                const path = {
                    pathname: "/Profile",
                    
                };
                history.push(path)
            }}>Click Me!</Button>
        </li>
        
        <li>
            <Link to="/ContactUs">Contact Us</Link>
        </li>
        </ul>
  </div>
  );
}


