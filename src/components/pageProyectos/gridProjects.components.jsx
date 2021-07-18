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
                "foto": "/img/morris.jpg",
                "stack": "SASS / ReactJs",
                "informacion": "Página para el artista Morris",
                "link": "http://morrisart.com.mx/",
                "gitLink": "https://github.com/kukulak/morrisArt",
                "mTop": "23",
                "caso": "morris"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "/img/dannyychris.jpg",
                "stack": "Django",
                "informacion":"3 diferentes templates para aumentar información",
                "link": "http://www.dannyychris.com/",
                "gitLink": "https://github.com/kukulak/dc-site",
                "mTop": "43",
                "caso": "bdc"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "/img/3bh.jpg",
                "stack": "SASS / ReactJs / WP Rest Api",
                "informacion":"Página en construcción",
                "link": "/video/3bh",
                "gitLink": "https://github.com/kukulak/3bh-react",
                "notLive": 'notLive',
                "mTop": "23",
                "caso": "3bh"
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
                "mTop": "63",
                "caso": "ahorra"
            },
            {
                "id": 5,
                "name": "frutasentemporada.com",
                "btnText": "frutasentemporada.com",
                "foto": "/img/frutas.jpg",
                "stack": "JavaScript Vainilla",
                "informacion":"Calendario que se actualiza por la temporada de frutas del mes",
                "link": "http://www.frutasentemporada.com/",
                "gitLink": "https://github.com/kukulak/frutas",
                "mTop": "13",
                "caso": "frutas"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "/img/habla.jpg",
                "stack": "Django / JavaScript",
                "informacion":"Experimento; buscando cuantas palabras usa el mexicano común",
                "link": "http://www.palabrahabla.com/",
                "gitLink": "https://github.com/kukulak/textoAudio",
                "mTop": "73",
                "caso": "habla"
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
                    
                    this.state.projects.map(({notLive, caso, name, id, link, informacion, foto, stack, mTop, gitLink}) => (
                        <Fade cascade><TarjetaProject urlImg={process.env.PUBLIC_URL + foto} mTop= {mTop + "px"} name={name} stack={stack} caso={caso} projectUrl={caso} notLive={notLive} hrefLive={link} hrefGit={gitLink} textBtn={name}/></Fade>
                        ))
                    }  
                </div>
    
            </div>
            
        )
    }

           
   
}

export default GridProjects;