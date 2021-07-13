import React from 'react';
import './infoText.styles.scss'

import Redes from './redes.component'
import iconD from '../assets/icons/downWhite.svg'

import Fade from 'react-reveal/Fade';

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Infotext = ({infoText}) =>(

    <div id="info" className='infoText'> 
        {/* <p>{infoText}</p> */}
            <Fade top cascade>
        <p>
                Tengo más de 2 años de experiencia como <strong> Full Stack Developer; </strong>
                utilizo Python y JavaScript.
            
        </p> 
        <p> 

            Manejo frameworks, librerías y herramientas como <strong> ReactJs, NodeJs, GraphQL, Django, Threejs, GSAP, Webpack. </strong>
        </p>
    <p><br/></p>
            <p>Con más de 15 años de experiencia en comunicación visual,
            evolucioné mi carrera a <strong>Front End Developer,</strong> esto me llevó a interesarme más en el código y realizar proyectos <strong>Full Stack</strong>.</p>

            <a className="downLoadCV" href={process.env.PUBLIC_URL + '/CV-Valderrama-curvas.pdf'}>
                Baja mi CV &nbsp;<img width="20" src={iconD} alt="icon download" />
                </a> 
        </Fade>

            <Redes/>
    </div>
);

export default Infotext;