import React, { useState } from 'react';
import './projects.styles.scss'
import Project from './project.component'
import { render } from '@testing-library/react';

import Infotext from './infoText.component';
import Contact from './contact.component';


import Fade from 'react-reveal/Fade'; // Importing Zoom effect


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class Projects extends React.Component {
    constructor(){
        super();
        
        this.state = {
           projects:[
            {
                "id": 1,
                "name": "Morris",
                "btnText": "Morris",
                "foto": "/img/morris.png",
                "stack": "SASS / ReactJs",
                "informacion": "Página para el artista Morris",
                "link": "http://morrisart.com.mx/",
                "gitLink": "https://github.com/kukulak/morrisArt",
                "mTop": "23",
                "textBtn": "Live",
                "video": " ",
                "caso": "morris"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "/img/dannyychris.png",
                "stack": "Django",
                "informacion":"3 diferentes templates para aumentar información",
                "link": "http://www.dannyychris.com/",
                "gitLink": "https://github.com/kukulak/dc-site",
                "mTop": "43",
                "textBtn": "Live",
                "video": " ",
                "caso": "bdc"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "/img/3bh.png",
                "stack": "SASS / ReactJs / WP Rest Api",
                "informacion":"Página en construccion",
                "link": "/video/3bh",
                "gitLink": "https://github.com/kukulak/3bh-react",
                "mTop": "23",
                "textBtn": "Video",
                "video": "/video/3bhejemplo-portfolio-low.mov",
                "caso": "3bh"
                
            },
            {
                "id": 4,
                "name": "ahorraAhora.com",
                "btnText": "ahorraAhora.com",
                "foto": "/img/ahorraahora.png",
                "stack": "Django",
                "informacion":"Sitio que ayuda a organizar los ahorros y definir objetivos",
                "link": "http://www.ahorraahora.com/",
                "gitLink": "https://github.com/kukulak/ahorros",
                "mTop": "63",
                "textBtn": "Live",
                "video": " ",
                "caso": "ahorra"
            },
            {
                "id": 5,
                "name": "frutasentemporada.com",
                "btnText": "frutasentemporada.com",
                "foto": "/img/frutas.png",
                "stack": "JavaScript Vainilla",
                "informacion":"Calendario que se actualiza por la temporada de frutas del mes",
                "link": "http://www.frutasentemporada.com/",
                "gitLink": "https://github.com/kukulak/frutas",
                "mTop": "13",
                "textBtn": "Live",
                "video": " ",
                "caso": "frutas"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.png",
                "stack": "Django / JavaScript",
                "informacion":"Experimento; buscando cuantas palabras usa el mexicano común",
                "link": "http://www.palabrahablada.com/",
                "gitLink": "https://github.com/kukulak/textoAudio",
                "mTop": "73",
                "textBtn": "Live",
                "video": " ",
                "caso": "habla"
            }
            ]
        }
    };


    componentDidMount(){


        let container = document.querySelector("#proyectosT");

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

        // solo una box
   
            // gsap.to('.box', {
            //     backgroundColor: '#ffffff00',
            //     scrollTrigger: {
            //     trigger: '.box',
            //     start: 'top center',
            //     toggleActions: 'play none none reverse',
            //     markers: true,
            //     id: 'proID'
            //     }
            // });
            

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
            <div id="proyectosT"> 
           
            {/* <div className="box"> */}
                <div className='box projects'>
                    {/* {
                        this.state.projects.map(({foto}) => (
                          <VideoModal urlVideo= {process.env.PUBLIC_URL + foto}/>
                          ))
                    } */}
                {
                    
                    this.state.projects.map(({caso, name, id, link, informacion, foto, stack, mTop, gitLink, textBtn}) => (
                        <Fade cascade><Project key={id} urlImg={process.env.PUBLIC_URL + foto} mTop= {mTop + "px"} name={name} textInfo={informacion} stack={stack} projectUrl={link} hrefLive={link} caso={caso} hrefGit={gitLink} textBtn={name} text={textBtn}/></Fade>
                        
                        ))
                    }  
                </div>
    
                <div className='box info'>
                    <Infotext  />
                </div>
    
                <div className='box contact'>
                    <Contact />
                </div>
            </div>
            // </div>
        )
    }

           
   
}

export default Projects;