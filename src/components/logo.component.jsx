import React from 'react';
import './logo.styles.scss'

import { Link, withRouter } from 'react-router-dom';

import Distortion from "./distortionsBlotter/distortion.js";

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Logo = ({url}) =>(

    <Link to='/' className='logo noselect'> 
        {/* <img src={url} alt="logo" /> */}
        <p>Valderrama.dev</p>
        {/* <p>fullStack developer</p> */}
        {/* <Distortion text='valderrama' /> */}
    </Link>
           
   
);

export default withRouter(Logo);