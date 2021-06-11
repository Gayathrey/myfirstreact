import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Contact from './Contact';

const Main = () => {
    return (

            <Router>

                <Home path = "/" />
                <Contact path = "contact" />

            </Router>
        
    );
}

export default Main; 