import React, { useState } from 'react';
import '../projects.styles.scss'
import Project from '../project.component'
import { render } from '@testing-library/react';

import Infotext from '../infoText.component';


import Contact from '../contact.component';
import { Parallax, Background } from 'react-parallax';

import Caso from '../caso.component';

import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import PrevNext from '../prevNext/prevNext.component'

import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class Ahorra extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[
     
              {
                id: 4,
                caso: 'ahorra',
                nombre: 'Ahorra Ahora',
                imgPrincipal: '/img/ahorraahora.jpg',
                imgUno: "/img/ahorra-home.jpg",
                imgDos: "/img/ahorra-p1.jpg",
                imgTres: "/img/ahorra-p2.jpg",
                imgCuatro: "/img/ahorra-p3.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "Django",
                ifLive: "http://valderramakelly.pythonanywhere.com/",
                gitHub: "https://github.com/kukulak/ahorros"
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

    
                <div className='box contact'>
                    {/* <Contact /> */}
                    <PrevNext linkPrev="3bh" linkNext="frutas" imgPrev="/img/morris-detalle.jpg" imgNext="/img/morris-detalle.jpg" />
                </div>
            </div>
            </Parallax>
           
        )
    }

           
   
}

export default Ahorra;