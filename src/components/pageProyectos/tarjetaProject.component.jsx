import React, { Component, useState, useEffect, useContext } from 'react';
import './pageProjects.styles.scss'
import ProjectBtn from '../projectBtn.component'
import ProjectTarjetaImg from '../projectTarjetaImg.component'
// import ProjectInfo from './projectInfo.component'
import ProjectName from '../projectName.component'
import ProjectStack from '../projectStack.component'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';



import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



function TarjetaProject({hrefGit, hrefLive, urlImg, name, stack, textBtn, projectUrl, textInfo, mTop}){
    // const proCon = React.createRef();
    // const proInfo = React.createRef();

    return(
       

        <div className='projectTarjetaContenedor' style={{ marginTop : mTop }}> 
            <ProjectBtn projectUrl={projectUrl} textBtn={textBtn}/>
            <ProjectTarjetaImg urlImg={urlImg} name={name} textInfo={textInfo} hrefLive={hrefLive} hrefGit={hrefGit}/>
            <ProjectName name={name}/>
            <ProjectStack stack={stack}/>
        </div>

        )
           
           

        }

export default TarjetaProject;