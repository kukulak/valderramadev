import React from 'react';
import './menuItem.styles.scss'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

import { Link, withRouter } from 'react-router-dom';


const Menuitem = ({nombre, link}) =>(

    <Link to={link} className='menuItem'> 
       {nombre}
    </Link>
             
);

export default withRouter(Menuitem);