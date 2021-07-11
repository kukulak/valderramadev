import React from 'react';
import MenuItem from './menuItem.component';

import {
    BrowserRouter as Router,
    withRouter,
    Route,
    Link
  } from "react-router-dom";

import './menu.styles.scss'

function HomePage(){
    return(
        // <Router>
            <div className="menu">
                
                    <MenuItem nombre='Proyectos' link='/proyectos'/>
                
                    <MenuItem nombre='Info' link='/info'/>
                
                    <MenuItem nombre='Contacto' link='/contacto' />
               
            </div>
        // </Router>
    );

}

export default withRouter(HomePage);