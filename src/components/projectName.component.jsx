import React from 'react';
import './projectName.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectName = ({name}) =>(

    <div className='projectName'> 
        <p>{name}</p>
    </div>
           
   
);

export default ProjectName;