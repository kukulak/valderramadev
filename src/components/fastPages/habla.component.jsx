import React, { useState } from 'react';
import '../projects.styles.scss'
import Project from '../project.component'
import { render } from '@testing-library/react';

import Infotext from '../infoText.component';
import { Parallax, Background } from 'react-parallax';

import Contact from '../contact.component';
import PrevNext from '../prevNext/prevNext.component'

import Caso from '../caso.component';

import Fade from 'react-reveal/Fade'; // Importing Zoom effect


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class Habla extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[             
              {
                id: 6,
                caso: 'palabra',
                nombre: 'Habla Palabra',
                imgPrincipal: '/img/habla-p1.jpg',
                imgUno: "/img/habla-p2.jpg",
                imgDos: "/img/habla-p3.jpg",
                imgTres: "/img/habla-p4.jpg",
                imgCuatro: "/img/habla-p5.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Creado en JavaScript para explorar Audio()",
                stack: "JavaScript Vainilla",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                notLive: "",
                gitHub: "https://github.com/kukulak/textoAudio"
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
                    this.state.casos.map(({notLive, caso, nombre, id, video, info, ifLive, imgUno, imgDos, imgTres, imgPrincipal, stack, gitHub, imgCuatro }) => (
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
                            notLive={notLive}
                        />
                    </Fade>
                            
                            ))
                    
                }
                </div>

    
                <div className='box contact'>
                    {/* <Contact /> */}
                    <PrevNext linkPrev="frutas" linkNext="morris" imgPrev="/img/morris-detalle.jpg" imgNext="/img/morris-detalle.jpg" />
                </div>
            </div>

</Parallax>
          
        )
    }

           
   
}

export default Habla;