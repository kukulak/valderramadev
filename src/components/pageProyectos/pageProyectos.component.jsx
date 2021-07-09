import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import Menu from '../menu.component';
import FullBackground from '../home/background.component'
import Contact from '../contact.component'
import GridProjects from './gridProjects.components'
import Portada from '../portada.component'
import Logo from '../logo.component'
import Infotext from '../infoText.component'
import './pageProjects.styles.scss'

// import { gsap } from "gsap";

// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// import { ScrollTrigger } from "gsap/ScrollTrigger";


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class PageProjects extends Component{

    state = {
        frases: []
    };

    componentDidMount() {
        let sections = gsap.utils.toArray(".panel") 
        
        // gsap.to(sections, {
        //     // x: -1150,
        //     xPercent: -120 * (sections.length - 1),
        //     ease: "none",
        //     opacity: 1,
        //     // y: "10%",
        //     scrollTrigger: {
        //       trigger: ".container",
        //       pin: true,
        //       scrub: 1,
        //     //   snap: 1 / (sections.length - 1),
        //       markers: true,
        //       end: ()=>"+=" + document.querySelector(".container").offsetWidth
           
        //     },
         
        //   });
        
      
    
    
        }
    render(){
        return(

                        <Parallax
            bgImage={process.env.PUBLIC_URL + 'img/fondorayos.png'} strength={-5200}>
            
                    {/* <Background className="custom-bg">
                    <img src= {process.env.PUBLIC_URL + 'img/fondorayos.png'} alt="" />
                      
                    </Background> */}
                

                <div className="home">
                    <Menu />
                    <Logo />
                    {/* <Portada /> */}
                    {/* <FullBackground /> */}
                    {/* <Portada /> */}
                    <GridProjects />
                    {/* <div className="container"> */}
                        {/* <div className="panel">
                        </div>
                        <div className="panel">
                        </div> */}
                        {/* <div className="panel">
                            <Infotext />
                        </div> */}
                        <div className="panelContact">
                            <Contact />
                        </div>
                    {/* </div> */}
                </div>
             </Parallax>
            )
    }

}

export default PageProjects;