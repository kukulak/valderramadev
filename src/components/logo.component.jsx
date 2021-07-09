import React from 'react';
import './logo.styles.scss'

import Distortion from "./distortionsBlotter/distortion.js";

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Logo = ({url}) =>(

    <div className='logo'> 
        {/* <img src={url} alt="logo" /> */}
        <h1>valderrama</h1>
        {/* <Distortion text='valderrama' /> */}
    </div>
           
   
);

export default Logo;