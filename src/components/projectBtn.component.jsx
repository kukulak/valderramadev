import React from 'react';
import './projectBtn.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectBtn = ({textBtn, projectUrl}) =>(

    <div className='projectBtn'> 
    <a href={projectUrl}>
        <p>{textBtn}</p>
    </a>
    </div>
           
   
);

export default ProjectBtn;