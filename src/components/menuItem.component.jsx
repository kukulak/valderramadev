import React from 'react';
import './menuItem.styles.scss'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Menuitem = ({nombre, link}) =>(

    <div className='menuItem'> 
        <a href={link}>{nombre}</a>
    </div>
       

        
   
);

export default Menuitem;