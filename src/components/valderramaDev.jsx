import React, { useState } from 'react';
import './projects.styles.scss'
import HomePage from './home/home.component'
import { render } from '@testing-library/react';

import Infotext from './infoText.component';
import Contact from './contact.component';


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class SuperHome extends React.Component {
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
                "link": "/",
                "gitLink": "https://github.com/kukulak/morrisArt",
                "mTop": "23"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "/img/dannyychris.png",
                "stack": "Django",
                "informacion":"3 diferentes templates para aumentar información",
                "link": "/acerca-de-mi",
                "gitLink": "https://github.com/kukulak/dc-site",
                "mTop": "43"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "/img/3bh.png",
                "stack": "SASS / ReactJs / WP Rest Api",
                "informacion":"Página en construccion",
                "link": "/colecciones",
                "gitLink": "https://github.com/kukulak/3bh-react",
                "mTop": "23"
            },
            {
                "id": 4,
                "name": "ahorraAhora.com",
                "btnText": "ahorraAhora.com",
                "foto": "/img/ahorraahora.png",
                "stack": "Django",
                "informacion":"Sitio que ayuda a organizar los ahorros y definir objetivos",
                "link": "/contacto",
                "gitLink": "https://github.com/kukulak/ahorros",
                "mTop": "63"
            },
            {
                "id": 5,
                "name": "frutasentemporada.com",
                "btnText": "frutasentemporada.com",
                "foto": "/img/frutas.png",
                "stack": "JavaScript Vainilla",
                "informacion":"Calendario que se actualiza por la temporada de frutas del mes",
                "link": "/contacto",
                "gitLink": "https://github.com/kukulak/frutas",
                "mTop": "13"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.png",
                "stack": "Django / JavaScript",
                "informacion":"Experimento; buscando cuantas palabras usa el mexicano común",
                "link": "/contacto",
                "gitLink": "https://github.com/kukulak/textoAudio",
                "mTop": "73"
            }
            ]
        }
    };


    componentDidMount(){


        let container = document.querySelector("#proyectos");

        let height;
        function setHeight() {
        height = container.clientHeight;
        document.body.style.height = height + "px";
        }
        ScrollTrigger.addEventListener("refreshInit", setHeight);

        // smooth scrolling container
        gsap.to(container, {
            y: () => -(height - document.documentElement.clientHeight),
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                invalidateOnRefresh: true,
                id: 'ContainerID',
                markers: false
            }
        });

        // scrolltrigger for each box
        gsap.utils.toArray('.box').forEach(box => {
        gsap.to(box, {
            backgroundColor: '#ffffff00',
            scrollTrigger: {
            trigger: box,
            end: "bottom bottom",
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
            <div id="proyectos" className="box superHome"> 
              <HomePage />
            </div>
        )
    }

           
   
}

export default SuperHome;