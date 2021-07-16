import React, { useState } from 'react';
import '../projects.styles.scss'
import Project from '../project.component'
import { render } from '@testing-library/react';

import Infotext from '../infoText.component';


import Contact from '../contact.component';
import { Parallax, Background } from 'react-parallax';

import Caso from '../caso.component';

import Fade from 'react-reveal/Fade'; // Importing Zoom effect


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class BH3 extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[
            
              {
                id: 3,
                caso: '3BH',
                nombre: '3BH',
                imgPrincipal: '/img/3bh.jpg',
                imgUno: "/img/3bh-home.jpg",
                imgDos: " ",
                imgTres: " ",
                imgCuatro: " ",
                video: " ",
                info: "Diseño y Full Stack development",
                stack: "SASS / ReactJs / WP Rest Api",
                ifLive: " ",
                gitHub: "https://github.com/kukulak/3bh-react"
              },
          
            ]
        }
    };


    componentDidMount(){



    }




    render(){

        return(
            <Parallax
            bgImage={process.env.PUBLIC_URL + 'img/fondorayos.jpg'} strength={-5200}>
            <div id="casoT"> 
           
          
                
                <div className="box contenedorCaso">
                    {
                    this.state.casos.map(({caso, nombre, id, video, info, ifLive, imgUno, imgDos, imgTres, imgPrincipal, stack, gitHub, imgCuatro }) => (
                    <Fade cascade>
                        <Caso
                            key={id}
                            video={video}
                            nombre={nombre}
                            imgPrincipal={imgPrincipal}
                            info={info}
                            stack={stack}
                            ifLive={ifLive}
                            imgUno={imgUno}
                            imgDos={imgDos}
                            imgTres={imgTres}
                            imgCuatro={imgCuatro}
                            gitHub={gitHub}
                        />
                    </Fade>
                            
                            ))
                    
                }
                </div>
{/* 
                <div className='box info'>
                    <Infotext  />
                </div> */}
    
                <div className='box contact'>
                    <Contact />
                </div>
            </div>
            </Parallax>
            // </div>
        )
    }

           
   
}

export default BH3;