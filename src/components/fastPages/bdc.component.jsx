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

class Bdc extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[
            
              {
                id: 2,
                caso: 'bdc',
                nombre: 'Danny y Chris',
                imgPrincipal: '/img/dannyychris.jpg',
                imgUno: "/img/bdc-home.jpg",
                imgDos: "/img/bdc-interior.jpg",
                imgTres: "/img/bdc-music.jpg",
                imgCuatro: "",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "Django",
                ifLive: "http://www.dannyychris.com/",
                notLive: "",
                gitHub: "https://github.com/kukulak/dc-site"
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
{/* 
                <div className='box info'>
                    <Infotext  />
                </div> */}
    
                <div className='box contact'>
                    {/* <Contact /> */}
                    <PrevNext linkPrev="morris" linkNext="3bh" imgPrev="/img/morris-detalle.jpg" imgNext="/img/morris-detalle.jpg" />
                </div>
            </div>
            </Parallax>
            // </div>
        )
    }

           
   
}

export default Bdc;