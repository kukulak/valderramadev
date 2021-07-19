import React, { useState } from 'react';
import './projects.styles.scss'
import Project from './project.component'
import { render } from '@testing-library/react';

import Infotext from './infoText.component';
import Contact from './contact.component';
import Portada from './portada.component'

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
                "foto": "/img/morris.jpg",
                "stack": "SASS / ReactJs",
                "informacionC": "Catálogo del artista Morris listo para escalar a e-commerce",
                "informacion": "Catálogo del artista Morris.",
                "link": "http://morrisart.com.mx/",
                "gitLink": "https://github.com/kukulak/morrisArt",
                "mTop": "23",
                "textBtn": "Live",
                "notLive": '',
                "video": " ",
                "caso": "morris"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "/img/dannyychris.jpg",
                "stack": "Django",
                "informacion": "Página del evento Danny y Chris",
                "informacionC":"Página para evento. Se pueden aumentar secciones, despues del evento cambia para presentación de fotos",
                "link": "http://www.dannyychris.com/",
                "gitLink": "https://github.com/kukulak/dc-site",
                "mTop": "43",
                "textBtn": "Live",
                "notLive": '',
                "video": " ",
                "caso": "bdc"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "caso",
                "foto": "/img/3bh.jpg",
                "stack": "SASS / ReactJs / WP Rest Api",
                "informacionC":"Se optimizaron tiempos y procesos al permanecer en un hosteo compartido e implementar WordPress API. Página en construcción",
                "informacion": "Sitio para Three Blue Hause.",
                "link": "",
                "gitLink": "https://github.com/kukulak/3bh-react",
                "mTop": "23",
                "textBtn": "Caso",
                "notLive": 'notLive',
                "video": "/video/3bhejemplo-portfolio-low.mov",
                "caso": "3bh"
            },
            {
                "id": 4,
                "name": "ahorraAhora.com",
                "btnText": "ahorraAhora.com",
                "foto": "/img/ahorraahora.jpg",
                "stack": "Django",
                "informacion":"AhorraAhora te ayuda a organizar tus ahorros y definir objetivos.",
                "link": "http://valderramakelly.pythonanywhere.com/",
                "gitLink": "https://github.com/kukulak/ahorros",
                "mTop": "63",
                "textBtn": "Live",
                "notLive": '',
                "video": " ",
                "caso": "ahorra"
            },
            {
                "id": 5,
                "name": "frutasentemporada",
                "btnText": "frutasentemporada",
                "foto": "/img/frutas.jpg",
                "stack": "JavaScript Vainilla",
                "informacion":"Calendario que se actualiza por la temporada de frutas del mes.",
                "informacionC": "Con ayuda de date() se define el tamaño de cada objeto; lo cual indica el mejor momento para consumir la fruta.",
                "link": "https://valderrama.dev/frutas/",
                "gitLink": "https://github.com/kukulak/frutas",
                "mTop": "13",
                "textBtn": "Live",
                "notLive": '',
                "video": " ",
                "caso": "frutas"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.jpg",
                "stack": "Django / JavaScript",
                "informacionC":"Al escribir un texto podemos escucharlo gracias a Audio() de javascript, las palabras están grabadas previamente con diferentes voces e intenciones. Este experimento se escucha.",
                "informacion": "De alguna forma te lee lo que escribes.",
                "link": "https://valderrama.dev/palabrahablada/",
                "gitLink": "https://github.com/kukulak/textoAudio",
                "mTop": "73",
                "textBtn": "Live",
                "notLive": '',
                "video": " ",
                "caso": "habla"
            }
            ]
        }
    };


    componentDidMount(){

        // componentDidMount() {
            window.scrollTo(0, 0);
                //    }

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
            





            // SCROLLER




        // function setupLinks(scroller) {
        // let linkElements = gsap.utils.toArray('.nav a'),
        //     linkTargets = linkElements.map(e => document.querySelector(e.getAttribute("href"))),
        //     linkPositions = [],
        //     calculatePositions = () => {
        //         let offset = gsap.getProperty(scroller, "y");
        //         linkTargets.forEach((e, i) => linkPositions[i] = e.getBoundingClientRect().top - offset);
        //     };
        
        // linkElements.forEach((element, i) => {
            
        //     element.addEventListener("click", e => {
        //     e.preventDefault();
        //     gsap.to(window, {scrollTo: linkPositions[i], ease: "power4", overwrite: true});
        //     });
        // });
        
        // ScrollTrigger.addEventListener("refresh", calculatePositions);
        // }

        // setupLinks(container);


    }




    render(){

        return(
            <div id="proyectosT"> 
            {/* <Portada /> */}
            {/* <div className="box"> */}
                <div className='box projects'>
                 
                {
                    
                    this.state.projects.map(({notLive, caso, name, id, link, informacion, foto, stack, mTop, gitLink, textBtn}) => (

                        <Fade cascade>
                            <Project key={id} urlImg={process.env.PUBLIC_URL + foto} mTop= {mTop + "px"} name={name} textInfo={informacion} stack={stack} projectUrl={link} hrefLive={link} caso={caso} notLive={notLive} hrefGit={gitLink} textBtn={name} text={textBtn}/>
                        </Fade>
                        
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