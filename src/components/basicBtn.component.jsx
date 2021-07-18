import React from 'react';
import './basicBtn.styles.scss'
import './general.scss'
import LazyLoad from 'react-lazyload';
{/* <LazyLoad height={200}></LazyLoad>
<LazyLoad height={200} once ></LazyLoad>
 <LazyLoad height={200} offset={100}></LazyLoad> */}


// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';


// onClick={closeModal} 


const BasicBtn = ({href, text, icono, notLive}) =>(

        <a className= {`basicBtn btxt reselect ${notLive}`} target="_blank" rel="noreferrer" href={href}>
            
                    {text}
                    {/* <p className="btxt">{text}</p> */}
                <img className="icon" src={icono} alt="icono" />
            
        </a>
           
   
);

export default BasicBtn;