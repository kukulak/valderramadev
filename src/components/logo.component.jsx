import React from 'react';
import './project.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Logo = ({url}) =>(

    <div className='projectImg'> 
        <img src={url} alt="logo" />
    </div>
           
   
);

export default Logo;