import React from 'react';
import Menu from '../menu.component';
import FullBackground from './background.component'
import Contact from '../contact.component'
import Projects from '../projects.component'
import Portada from '../portada.component'
import './home.styles.scss'

function HomePage(){
    return(
        <div className="home">
            <Menu />
            <Portada />
            <Contact />
            <FullBackground />
            <Projects />
        </div>
    );

}

export default HomePage;