import React from 'react';
import MenuItem from './menuItem.component';

import './menu.styles.scss'

function HomePage(){
    return(
        <div className="menu">
            <MenuItem link='#proyectos' nombre='Proyectos'/>
            <MenuItem link='#info' nombre='Info'/>
            <MenuItem link='#contacto' nombre='Contacto'/>
        </div>
    );

}

export default HomePage;