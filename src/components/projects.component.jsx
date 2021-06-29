import React, { useState } from 'react';
import './project.styles.scss'
import Project from './project.component'
import { render } from '@testing-library/react';

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
                "foto": "",
                "stack": "SASS / ReactJs",
                "informacion": "Página para el artista Morris",
                "link": "/"
            },   
            {
                "id": 2,
                "name": "dannyychris.com",
                "btnText": "dannyychris.com",
                "foto": "",
                "stack": "Django",
                "informacion":"3 diferentes templates para aumentar información",
                "link": "/acerca-de-mi"
            },
            {
                "id": 3,
                "name": "3BH",
                "btnText": "ver video",
                "foto": "",
                "stack": "SASS / ReactJs / WordPress Rest Api",
                "informacion":"Página en construccion",
                "link": "/colecciones"
            },
            {
                "id": 4,
                "name": "ahorraAhora.com",
                "btnText": "ahorraAhora.com",
                "foto": "",
                "stack": "Django",
                "informacion":"Sitio que ayuda a organizar los ahorros y definir objetivos",
                "link": "/contacto"
            },
            {
                "id": 5,
                "name": "frutasentemporada.com",
                "btnText": "frutasentemporada.com",
                "foto": "",
                "stack": "JavaScript Vainilla",
                "informacion":"Calendario que se actualiza por la temporada de frutas del mes",
                "link": "/contacto"
            },
            {
                "id": 6,
                "name": "palabraHablada.com",
                "btnText": "palabraHablada.com",
                "foto": "",
                "stack": "Django / JavaScript",
                "informacion":"Experimento; buscando cuantas palabras usa el mexicano común",
                "link": "/contacto"
            }
            ]
        }
    };
    
    render(){

        return(
            <div className='projects'> 
            {

                this.state.projects.map(({name, id, link, informacion, foto, stack}) => (
                    <Project urlImg={foto} name={name} textInfo={informacion} stack={stack} projectUrl={link} textBtn={name}/>
             ))
            }  
            </div>
        )
    }

           
   
}

export default Projects;