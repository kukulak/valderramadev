import React from 'react';
import './project.styles.scss'
import ProjectBtn from './projectBtn.component'
import ProjectImg from './projectImg.component'
import ProjectInfo from './projectInfo.component'
import ProjectName from './projectName.component'
import ProjectStack from './projectStack.component'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Project = ({urlImg, name, stack, textBtn, projectUrl, textInfo, mTop}) =>(

    <div className='projectContenedor' style={{ marginTop : mTop }}> 
       <ProjectImg urlImg={urlImg} name={name}/>
       <ProjectInfo textInfo={textInfo}/>
       <ProjectName name={name}/>
       <ProjectStack stack={stack}/>
       <ProjectBtn projectUrl={projectUrl} textBtn={textBtn}/>
    </div>
           
   
);

export default Project;