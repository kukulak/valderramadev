import React, { Component, useState, useEffect, useContext } from 'react';
import './project.styles.scss'
import ProjectBtn from './projectBtn.component'
import ProjectImg from './projectImg.component'
// import ProjectInfo from './projectInfo.component'
import ProjectName from './projectName.component'
import ProjectStack from './projectStack.component'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';



import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// function hoverAnim(element){
//     element.style.marginLeft = '0px'
//     element.style.width = '-webkit-fill-available'
// }

// function hoverOutAnim(element){
//     element.style.marginLeft = '5000px'
//     element.style.width = '1500px'
// }


function Project({hrefGit, hrefLive, urlImg, name, stack, textBtn, projectUrl, textInfo, mTop, text}){
    const proCon = React.createRef();
    const proInfo = React.createRef();

  

    useEffect(() => {
        gsap.to(proCon.current,
            {
            
                scrollTrigger:{
                    trigger: proCon.current,
                    start: "60 90%",
                    end: "70px center",
                    pin: false,
                    scrub: 2,
                    markers: false,
                    toggleActions: "play pause resume reset",
                    id: "my-id",
                },
                   
                    ease: 'none',
                    
                    x: -51,
                    opacity: 1,
                    duration: 1.5
            }
        )
    });

    // useEffect(()=>{
    //   if (proCon.current.onMouseOver()) {
    //       hoverAnim(proInfo.current)
    //   }

    // //   onMouseOver={hoverAnim(proInfo.current)}
    // });

    return(
        
        // <div onMouseOut={() => hoverOutAnim(proInfo.current)} onMouseOver={() => hoverAnim(proInfo.current)} ref={proCon} className='projectContenedor' style={{ marginTop : mTop }}> 

        <div className='projectContenedor' style={{ marginTop : mTop }}> 
            <ProjectBtn projectUrl={projectUrl} textBtn={textBtn}/>
            <ProjectImg urlImg={urlImg} name={name} textInfo={textInfo} hrefLive={hrefLive} hrefGit={hrefGit} text={text}/>
            {/* <div className="contenedorInfo" ref={proInfo}>
                <ProjectInfo textInfo={textInfo} hrefLive={hrefLive} hrefGit={hrefGit}/>
            </div> */}
            <ProjectName name={name}/>
            <ProjectStack stack={stack}/>
        </div>
        )
           
           

        }

export default Project;