import React from 'react';
import './projectImg.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectImg = ({urlImg, name}) =>(

    <div className='projectImg'> 
        <img src={urlImg} alt={name} />
    </div>
           
   
);

export default ProjectImg;