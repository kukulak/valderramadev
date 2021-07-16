import React from 'react';
import './basicBtn.styles.scss'
import './general.scss'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';


// onClick={closeModal} 


const BasicBtn = ({href, text, icono}) =>(

        <a className='basicBtn btxt reselect' target="_blank" rel="noreferrer" href={href}>
            
                    {text}
                    {/* <p className="btxt">{text}</p> */}
                <img className="icon" src={icono} alt="icono" />
            
        </a>
           
   
);

export default BasicBtn;