import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import Menu from '../menu.component';
import FullBackground from '../home/background.component'
import Contact from '../contact.component'

import Portada from '../portada.component'
import Logo from '../logo.component'
import Infotext from '../infoText.component'
import './infoPage.styles.scss'

// import { gsap } from "gsap";

// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// import { ScrollTrigger } from "gsap/ScrollTrigger";


import { withRouter } from 'react-router-dom';


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class InfoPage extends Component{

    state = {
        frases: []
    };

    componentDidMount() {
        let sections = gsap.utils.toArray(".panel") 
        window.scrollTo(0, 0);
        
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
            bgImage={process.env.PUBLIC_URL + 'img/fondorayos.jpg'} strength={-5200}>
                

                <div className="home">
              
                        <div className="panel">
                            <Infotext />
                        </div>
                        {/* <div className="panelContact">
                            <Contact />
                        </div> */}
                 
                </div>
             </Parallax>
            )
    }

}

export default withRouter(InfoPage);