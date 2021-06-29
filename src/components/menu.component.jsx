import React from 'react';
import MenuItem from './menuItem.component';

import './menu.styles.scss'

function HomePage(){
    return(
        <div className="menu">
            <MenuItem nombre='Proyectos'/>
            <MenuItem nombre='Info'/>
            <MenuItem nombre='Contacto'/>
        </div>
    );

}

export default HomePage;