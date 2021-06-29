import React from 'react';
import './infoText.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Infotext = ({infoText}) =>(

    <div className='infoText'> 
        {/* <p>{infoText}</p> */}
        <p>

            Tengo más de 2 años de experiencia como Full Stack Developer,
            utilizo Python y JavaScript. Manejo frameworks y librerías como
            React, Django, Threejs, GSAP.

            Con más de 15 años de experiencia en comunicación visual,
            evolucioné mi carrera a Front End, poco a poco me fui involucrando
            más en la programación hasta llegar a Full Stack Developer.
        </p>
    </div>
           
   
);

export default Infotext;