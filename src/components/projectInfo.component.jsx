import React from 'react';
import './projectInfo.styles.scss'

import Infotext from './infoText.component'

import iconLive from '../assets/icons/web.svg'
import iconGit from '../assets/icons/github.svg'

import BasicBtn from './basicBtn.component';

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';



const ProjectInfo = ({icono, hrefLive, hrefGit, textInfo, text}) =>(

    <div className='projectInfo'> 
        <p>{textInfo}</p>
        {/* <Infotext /> */}
        <div className="botones">
            <BasicBtn icono={iconLive} href={hrefLive} text={text} />
            <BasicBtn icono={iconGit} href={hrefGit} text='GitHub' />
        </div>
            
    </div>
           
   
);

export default ProjectInfo;