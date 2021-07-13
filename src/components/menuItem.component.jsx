import React from 'react';
import './menuItem.styles.scss'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

import { NavLink } from "react-router-dom";

import { Link, withRouter } from 'react-router-dom';


const Menuitem = ({nombre, link}) =>(

    <NavLink to={link} className='menuItem' activeClassName="is-active"> 
       {nombre}
    </NavLink>
             
);

export default withRouter(Menuitem);