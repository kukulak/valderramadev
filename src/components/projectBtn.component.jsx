import React from 'react';
import './projectBtn.styles.scss'

import Distortion from "./distortionsBlotter/distortion.js";

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const ProjectBtn = ({textBtn, projectUrl}) =>(

    <div className='projectBtn'> 

    <a href={projectUrl}>

        {/* <Distortion text={textBtn} /> */}
        <div>
            {textBtn}
                {/* <Distortion text={textBtn} /> */}

        </div>
    </a>
    </div>
           
   
);

export default ProjectBtn;