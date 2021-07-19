import React from 'react';
import MenuItem from './menuItem.component';

import {
    BrowserRouter as Router,
    withRouter,
    Route,
    Link
  } from "react-router-dom";

import './footer.styles.scss'

function Footer(){
    return(
        // <Router>
            <div className="footer">

                <p className="textoFooter">
                HECHO EN M&Eacute;XICO. Christian Valderrama. © 2021 <br /><br />


                <a href="http://" target="_blank" rel="noopener noreferrer">

                </a>

                Este portafolio fue hecho con las herramientas 
                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;Affinity Designer,
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;Affinity Photo&nbsp;
                </a>
                y 

                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;Visual Estudio Code,&nbsp; <br />
                </a>
                la librer&iacute;a 
                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;RactJs,&nbsp;
                </a>
                el Kit de herramientas 
                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;GSAP&nbsp;
                </a>
                y 
                <a href="http://" target="_blank" rel="noopener noreferrer">
                &nbsp;React-Parallax.&nbsp; 
                </a><br />
                    {/* las tipografías Barrio para el nombre, Bigshot One para títulos y Open Sans para el cuerpo, <br />las tres en  
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    &nbsp;Google Fonts
                    </a> */}
                <br /><br />
                    </p>

                    <div className="gridMenus">

                        <MenuItem nombre='Proyectos' link='/proyectos'/>
                    
                        <MenuItem nombre='Info' link='/info'/>
                    
                        <MenuItem nombre='Contacto' link='/contacto' />

                    </div>
               
            </div>
        // </Router>
    );

}

export default withRouter(Footer);