import React from 'react';
import './redes.styles.scss'

import Red from './red.comnponent'

import linkedin from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/gitHub-w.svg'
import instagram from '../assets/icons/iconInsta.svg'
import youtube from '../assets/icons/iconYoutube.svg'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

const Redes = ({link, url, name}) =>(
    <div className='redes'>
        <Red link="https://www.linkedin.com/in/christian-valderrama-9a066a19/" img={linkedin} name="linkedIn"/>
        <Red link="https://github.com/kukulak" img={github} name="GitHub"/>
        <Red link="https://www.instagram.com/valderramacero/" img={instagram} name="instagram"/>
        <Red link="https://www.youtube.com/channel/UCrPkqO_d-oMQVU29zAvUlEQ" img={youtube} name="youtube"/>
    </div> 
);

export default Redes;