import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import Menu from '../menu.component';
import FullBackground from './background.component'
import Contact from '../contact.component'
import Projects from '../projects.component'
import Portada from '../portada.component'
import Logo from '../logo.component'
import Infotext from '../infoText.component'
import './home.styles.scss'

// import { gsap } from "gsap";

// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// import { ScrollTrigger } from "gsap/ScrollTrigger";


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class HomePage extends Component{

    state = {
        frases: []
    };

    componentDidMount() {
        let sections = gsap.utils.toArray(".panel") 
        
        gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            // y: "10%",
            scrollTrigger: {
              trigger: ".container",
              pin: true,
              scrub: 1,
            //   snap: 1 / (sections.length - 1),
              markers: true,
              end: ()=>"+=" + document.querySelector(".container").offsetWidth
           
            },
         
          });
        
      
    
    
        }
    render(){
        return(

            <div className="home">
                <Menu />
                <Logo />
                <Portada />
                <FullBackground />
                <div className="container">
                    <div className="panel">
                        <Projects />
                    </div>
                    <div className="panel">
                        {/* <Infotext /> */}
                    </div>
                    {/* <div className="panel">
                        <Contact />
                    </div> */}
                </div>
             </div>
            )
    }

}

export default HomePage;