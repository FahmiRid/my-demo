
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Slideshow2 from './components/Slideshow2';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'
import { pink } from '@mui/material/colors';
import Photo from './components/Photo';
import Login from './components/Login';

const theme = createTheme({
    palette: {
        primary: purple,
        secondary: pink,
            
        
    }
})

function App() {
    return ( 
        <div>
            <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Photo" component={Photo} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </Router>
            </ThemeProvider>
            
            </div>
        
    );
}

export default App;