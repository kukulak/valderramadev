import React from 'react';
import './red.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Red = ({link, img, name}) =>(

    <div className='red'> 
        <a href={link} target="_blank" rel="noreferrer">
            <img className='iconRedes' src={img} alt={name} />
        </a>
    </div>
           
   
);

export default Red;