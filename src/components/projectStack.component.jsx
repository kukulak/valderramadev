import React from 'react';
import './projectStack.styles.scss'



// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectStack = ({stack}) =>(

    <div className='projectStack'> 
        <p>{stack}</p>
    </div>
           
   
);

export default ProjectStack;