import React from 'react';
import './red.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';


import LazyLoad from 'react-lazyload';
{/* <LazyLoad height={200}></LazyLoad>
<LazyLoad height={200} once ></LazyLoad>
 <LazyLoad height={200} offset={100}></LazyLoad> */}






const Red = ({link, img, name}) =>(

    <div className='red'> 
        <a href={link} target="_blank" rel="noreferrer">
            <LazyLoad height={200}>
                <img className='iconRedes' src={img} alt={name} />
            </LazyLoad>
        </a>
    </div>
           
   
);

export default Red;