import React, { useState } from 'react';
import './projects.styles.scss'
import Project from './project.component'
import { render } from '@testing-library/react';

import Infotext from './infoText.component';
import Contact from './contact.component';

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
                "link": "/",
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
                "mTop": "43"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "/img/3bh.png",
                "stack": "SASS / ReactJs / WordPress Rest Api",
                "informacion":"Página en construccion",
                "link": "/colecciones",
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
                "mTop": "73"
            }
            ]
        }
    };
    
    render(){

        return(
            <div id="proyectos" className='projects'> 
            {

                this.state.projects.map(({name, id, link, informacion, foto, stack, mTop}) => (
                    <Project urlImg={process.env.PUBLIC_URL + foto} mTop= {mTop + "px"} name={name} textInfo={informacion} stack={stack} projectUrl={link} textBtn={name}/>
             ))
            }  

            <Infotext  />
            <Contact />
            </div>
        )
    }

           
   
}

export default Projects;