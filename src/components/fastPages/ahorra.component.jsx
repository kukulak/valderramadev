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

class Ahorra extends React.Component {
    constructor(){
        super();
        
        this.state = {
           casos:[
            {
                id: 1,
                caso: 'morris',
                nombre: 'Morris',
                imgPrincipal: "/img/morris.png",
                imgUno: "/img/morris.png",
                imgDos: "/img/morris.png",
                imgTres: "/img/morris.png",
                imgCuatro: "/img/morris.png",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Sitio",
                ifLive: "http://morrisart.com.mx/",
                gitHub: "https://github.com/kukulak/morrisArt",
              },
              {
                id: 2,
                caso: 'bdc',
                nombre: 'Danny y Chris',
                imgPrincipal: '',
                imgUno: "http://morrisart.com.mx/images/isidoro1.jpg",
                imgDos: "http://morrisart.com.mx/images/isidoro2.jpg",
                imgTres: "http://morrisart.com.mx/images/isidoro3.jpg",
                imgCuatro: "http://morrisart.com.mx/images/isidoro4.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Información que leer",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "/bdc"
              },
              {
                id: 3,
                caso: '3BH',
                nombre: '3BH',
                imgPrincipal: '',
                imgUno: "http://morrisart.com.mx/images/isidoro1.jpg",
                imgDos: "http://morrisart.com.mx/images/isidoro2.jpg",
                imgTres: "http://morrisart.com.mx/images/isidoro3.jpg",
                imgCuatro: "http://morrisart.com.mx/images/isidoro4.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Información que leer",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "/3bh"
              },
              {
                id: 4,
                caso: 'ahorra',
                nombre: 'Ahorra Ahora',
                imgPrincipal: '',
                imgUno: "http://morrisart.com.mx/images/isidoro1.jpg",
                imgDos: "http://morrisart.com.mx/images/isidoro2.jpg",
                imgTres: "http://morrisart.com.mx/images/isidoro3.jpg",
                imgCuatro: "http://morrisart.com.mx/images/isidoro4.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Información que leer",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "/ahorra"
              },
              {
                id: 5,
                caso: 'frutas',
                nombre: 'Temporada de frutas',
                imgPrincipal: '',
                imgUno: "http://morrisart.com.mx/images/isidoro1.jpg",
                imgDos: "http://morrisart.com.mx/images/isidoro2.jpg",
                imgTres: "http://morrisart.com.mx/images/isidoro3.jpg",
                imgCuatro: "http://morrisart.com.mx/images/isidoro4.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Información que leer",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "/frutas"
              },
              {
                id: 6,
                caso: 'palabra',
                nombre: 'Habla Palabra',
                imgPrincipal: '',
                imgUno: "http://morrisart.com.mx/images/isidoro1.jpg",
                imgDos: "http://morrisart.com.mx/images/isidoro2.jpg",
                imgTres: "http://morrisart.com.mx/images/isidoro3.jpg",
                imgCuatro: "http://morrisart.com.mx/images/isidoro4.jpg",
                video: "http://morrisart.com.mx/images/isidoro4.jpg",
                info: "Información que leer",
                ifLive: "http://morrisart.com.mx/images/isidoro4.jpg",
                gitHub: "/habla"
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
                    this.state.casos.map(({caso, nombre, imgPrincipal, id, video, info, ifLive, imgUno, imgDos, imgTres, gitHub }) => (
                    <Fade cascade>
                        <Caso
                            key={id}
                            video={video}
                            nombre={nombre}
                            imgPrincipal={process.env.PUBLIC_URL + imgPrincipal}
                            info={info}
                            gitHub={gitHub}
                            ifLive={process.env.PUBLIC_URL + ifLive}
                            imgUno={process.env.PUBLIC_URL + imgUno}
                            imgDos={process.env.PUBLIC_URL + imgDos}
                            imgTres={process.env.PUBLIC_URL + imgTres}
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

export default Ahorra;