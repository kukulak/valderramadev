import React from 'react';
import './contact.styles.scss'
import BasicBtn from './basicBtn.component'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Contact = ({text}) =>(

    <div id="contacto" className='contact'> 
        <p>{text}</p>
        <BasicBtn text='ENVIAR' />
    </div>
           
   
);

export default Contact;