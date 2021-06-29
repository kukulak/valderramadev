import React from 'react';
import './basicBtn.styles.scss'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const BasicBtn = ({text}) =>(

    <div className='basicBtn'> 
        <p>{text}</p>
    </div>
           
   
);

export default BasicBtn;