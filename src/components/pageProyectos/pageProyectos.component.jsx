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

import { withRouter } from 'react-router-dom';


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class PageProjects extends Component{

    state = {
        frases: []
    };

    

    componentDidMount() {
        window.scrollTo(0, 0);
               }

    render(){
        return(

            <Parallax bgImage={process.env.PUBLIC_URL + 'img/fondorayos.png'} strength={-5200}>
            
                <div className="home">
                   
                   <div className="panel">
                        <GridProjects />   

                       
                   </div>
                    
                        <div className="panelContact">
                            <Contact />
                        </div>
                 
                </div>
             </Parallax>
            )
    }

}

export default withRouter(PageProjects);