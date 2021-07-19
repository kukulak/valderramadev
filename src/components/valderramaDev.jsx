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
                "foto": "/img/morris.jpg",
                "stack": "SASS / ReactJs",
                "informacion": "Catálogo del artista Morris listo para escalar a e-commerce",
                "link": "http://morrisart.com.mx/",
                "gitLink": "https://github.com/kukulak/morrisArt",
                "mTop": "23"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "/img/dannyychris.jpg",
                "stack": "Django",
                "informacion":"Página para evento. Se pueden aumentar secciones, despues del evento cambia para presentación de fotos",
                "link": "http://www.dannyychris.com/",
                "gitLink": "https://github.com/kukulak/dc-site",
                "mTop": "43"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "/img/3bh.jpg",
                "stack": "SASS / ReactJs / WP Rest Api",
                "informacion":"Se optimizaron tiempos y procesos al permanecer en un hosteo compartido e implementar WordPress API. Página en construcción",
                "link": "",
                "gitLink": "https://github.com/kukulak/3bh-react",
                "mTop": "23"
            },
            {
                "id": 4,
                "name": "ahorraAhora.com",
                "btnText": "ahorraAhora.com",
                "foto": "/img/ahorraahora.jpg",
                "stack": "Django",
                "informacion":"Sitio que ayuda a organizar los ahorros y definir objetivos",
                "link": "http://www.ahorraahora.com/",
                "gitLink": "https://github.com/kukulak/ahorros",
                "mTop": "63"
            },
            {
                "id": 5,
                "name": "frutasentemporada",
                "btnText": "frutasentemporada",
                "foto": "/img/frutas.jpg",
                "stack": "JavaScript Vainilla",
                "informacionC":"Calendario que se actualiza por la temporada de frutas del mes",
                "informacion": "Con ayuda de date() se define el tamaño de cada objeto; lo cual indica el mejor momento para consumir la fruta.",
                "link": "https://valderrama.dev/temporadadefrutas/",
                "gitLink": "https://github.com/kukulak/frutas",
                "mTop": "13"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.jpg",
                "stack": "Django / JavaScript",
                "informacion":"Al escribir un texto podemos escucharlo gracias a Audio() de javascript, las palabras están grabadas previamente con diferentes voces e intenciones. Este experimento se escucha.",
                "link": "https://valderrama.dev/hablapalabra/",
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
        // document.body.style.height = height + "px";
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