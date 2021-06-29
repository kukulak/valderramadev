import React from 'react';
import './red.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Red = ({link, url, name}) =>(

    <div className='red'> 
        <a href={link}>
            <img src={url} alt={name} />
        </a>
    </div>
           
   
);

export default Red;