import React from 'react';
import './projectInfo.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectInfo = ({textInfo}) =>(

    <div className='projectInfo'> 
        <p>{textInfo}</p>
    </div>
           
   
);

export default ProjectInfo;