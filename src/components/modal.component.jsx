import React, { Component, useState, useEffect, useContext } from 'react';
import './modal.styles.scss'
import ProjectBtn from './projectBtn.component'
import ProjectImg from './projectImg.component'
import ProjectName from './projectName.component'
import ProjectStack from './projectStack.component'




import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



function VideoModal({urlVideo, mTop}){
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


    return(
        
  

        <div className='modalContenedor' style={{ marginTop : mTop }}> 
           <video src={urlVideo}></video>

           HOLA VIDEO MODAL
        </div>
        )
           
           

        }

export default VideoModal;