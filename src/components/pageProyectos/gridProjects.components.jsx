import React, { useState } from 'react';
import './pageProjects.styles.scss'
import TarjetaProject from './tarjetaProject.component'
import { render } from '@testing-library/react';

// import Infotext from './infoText.component';
// import Contact from './contact.component';


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


import Fade from 'react-reveal/Fade';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

class GridProjects extends React.Component {
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
                "mTop": "23"
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
                "mTop": "43"
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
                "mTop": "23"
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
                "mTop": "63"
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
                "mTop": "13"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.png",
                "stack": "Django / JavaScript",
                "informacion":"Experimento; buscando cuantas palabras usa el mexicano común",
                "link": "http://www.palabrahabla.com/",
                "gitLink": "https://github.com/kukulak/textoAudio",
                "mTop": "73"
            }
            ]
        }
    };


    componentDidMount(){}




    render(){

        return(
            <div className="cuadriculaProjectssss"> 
            
                <div className='cuadriculaProjects'>
                {
                    
                    this.state.projects.map(({name, id, link, informacion, foto, stack, mTop, gitLink}) => (
                        <Fade cascade><TarjetaProject urlImg={process.env.PUBLIC_URL + foto} mTop= {mTop + "px"} name={name} stack={stack} projectUrl={link} hrefLive={link} hrefGit={gitLink} textBtn={name}/></Fade>
                        ))
                    }  
                </div>
    
            </div>
            
        )
    }

           
   
}

export default GridProjects;