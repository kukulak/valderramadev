import React, { useState } from 'react';
import '../projects.styles.scss'
import Project from '../project.component'
import { render } from '@testing-library/react';

import Infotext from '../infoText.component';


import Contact from '../contact.component';


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
                imgPrincipal: '',
                imgPrincipal: "/img/morris.png",
                imgUno: "/img/morris-home.png",
                imgDos: "/img/morris-collecciondos.png",
                imgTres: "/img/morris-detalle.png",
                imgCuatro: " ",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "SASS / ReactJs",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "https://github.com/kukulak/morrisArt"
              },
              {
                id: 2,
                caso: 'bdc',
                nombre: 'Danny y Chris',
                imgPrincipal: '/img/dannyychris.png',
                imgUno: "/img/bdc-home.png",
                imgDos: "/img/bdc-interior.png",
                imgTres: "/img/bdc-music.png",
                imgCuatro: "",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "Django",
                ifLive: "http://www.dannyychris.com/",
                gitHub: "https://github.com/kukulak/dc-site"
              },
              {
                id: 3,
                caso: '3BH',
                nombre: '3BH',
                imgPrincipal: '/img/3bh.png',
                imgUno: "/img/3bh-home.png",
                imgDos: "",
                imgTres: "",
                imgCuatro: "",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "SASS / ReactJs / WP Rest Api",
                ifLive: "",
                gitHub: "https://github.com/kukulak/3bh-react"
              },
              {
                id: 4,
                caso: 'ahorra',
                nombre: 'Ahorra Ahora',
                imgPrincipal: '/img/ahorraahora.png',
                imgUno: "/img/ahorra-home.png",
                imgDos: "/img/ahorra-p1.png",
                imgTres: "/img/ahorra-p2.png",
                imgCuatro: "/img/ahorra-p3.png",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Diseño y Full Stack development",
                stack: "Django",
                ifLive: "http://valderramakelly.pythonanywhere.com/",
                gitHub: "https://github.com/kukulak/ahorros"
              },
              {
                id: 5,
                caso: 'frutas',
                nombre: 'Temporada de frutas',
                imgPrincipal: '/img/frutas.png',
                imgUno: "/img/frutas-p1.png",
                imgDos: "/img/frutas-p2.png",
                imgTres: "/img/frutas-p3.png",
                imgCuatro: "/img/frutas-p4.png",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Ejercicio OOP y date()",
                stack: "JavaScript Vainilla",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "https://github.com/kukulak/frutas"
              },
              {
                id: 6,
                caso: 'palabra',
                nombre: 'Habla Palabra',
                imgPrincipal: '/img/habla-p1.png',
                imgUno: "/img/habla-p2.png",
                imgDos: "/img/habla-p3.png",
                imgTres: "/img/habla-p4.png",
                imgCuatro: "/img/habla-p5.png",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Creado en JavaScript para explorar Audio()",
                stack: "JavaScript Vainilla",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "https://github.com/kukulak/textoAudio"
              }
            ]
        }
    };


    componentDidMount(){


        let container = document.querySelector("#casoT");

        let height;
        function setHeight() {
            height = container.clientHeight;
            // height = 1000;
            console.log("DOCheight", document.body.style.height)

            document.body.style.height = height + "px";
            console.log("height", height)
        }
        // ScrollTrigger.addEventListener("refreshInit", setHeight);
        ScrollTrigger.addEventListener("refreshInit", setHeight);

        // smooth scrolling container
        gsap.to(container, {
        // y: () => -(height - document.documentElement.clientHeight),
        y: () => -(height - height),
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
        }
        });

        // scrolltrigger for each box
        gsap.utils.toArray('.box').forEach(box => {
            gsap.to(box, {
                backgroundColor: '#ffffff00',
                scrollTrigger: {
                trigger: box,
                start: 'top center',
                toggleActions: 'play none none reverse',
                markers: false,
                id: 'proID'
                }
            });
        });

   

        function setupLinks(scroller) {
        let linkElements = gsap.utils.toArray('.nav a'),
            linkTargets = linkElements.map(e => document.querySelector(e.getAttribute("href"))),
            linkPositions = [],
            calculatePositions = () => {
                let offset = gsap.getProperty(scroller, "y");
                linkTargets.forEach((e, i) => linkPositions[i] = e.getBoundingClientRect().top - offset);
            };
        
        linkElements.forEach((element, i) => {
            
            element.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, {scrollTo: linkPositions[i], ease: "power4", overwrite: true});
            });
        });
        
        ScrollTrigger.addEventListener("refresh", calculatePositions);
        }

        setupLinks(container);


    }




    render(){

        return(
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
            // </div>
        )
    }

           
   
}

export default Morris;