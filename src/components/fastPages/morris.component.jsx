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

class Morris extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[
            {
                id: 1,
                caso: 'morris',
                nombre: 'Morris',
                imgPrincipal: "/img/morris.jpg",
                imgUno: "/img/morris-home.jpg",
                imgDos: "/img/morris-collecciondos.jpg",
                imgTres: "/img/morris-detalle.jpg",
                imgCuatro: " ",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Catálogo del artista Morris, listo para escalar a e-commerce",
                des: "Diseño y Full Stack development",
                stack: "SASS / ReactJs / Django",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                notLive: "",
                gitHub: "https://github.com/kukulak/morrisArt"
              },
              
            ]
        }
    };


    componentDidMount(){
        window.scrollTo(0, 0);

    }




    render(){

        return(

            <Parallax
            bgImage={process.env.PUBLIC_URL + 'img/fondorayos.jpg'} strength={-5200}>

                <div id="casoT"> 
               
              
                    
                    <div className="box contenedorCaso">
                        {
                        this.state.casos.map(({des, notLive, caso, nombre, id, video, info, ifLive, imgUno, imgDos, imgTres, imgPrincipal, stack, gitHub, imgCuatro }) => (
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
                                des={des}
                            />
                        </Fade>
                                
                                ))
                        
                    }
                    </div>

        
                    <div className='box contact'>
                        {/* <Contact /> */}
                        <PrevNext linkPrev="habla" linkNext="bdc" imgPrev="/img/morris-detalle.jpg" imgNext="/img/morris-detalle.jpg" />
                    </div>
                </div>
               
            </Parallax>
        )
    }

           
   
}

export default Morris;