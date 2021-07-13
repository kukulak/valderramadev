import React from 'react';
import './projectImg.styles.scss'
import '../components/general.scss'


import ProjectInfo from './projectInfo.component'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';



function hoverAnim(element){
    element.style.marginLeft = '0px'
    element.style.width = '-webkit-fill-available'
}

function hoverOutAnim(element){
    element.style.marginLeft = '4600px'
    element.style.width = '500px'
}



function ProjectTarjetaImg({urlImg, name, textInfo, hrefLive, hrefGit}) {

    
    const proTCon = React.createRef();
    const proTInfo = React.createRef();
    return(

        <div onMouseOut={() => hoverOutAnim(proTInfo.current)} onMouseOver={() => hoverAnim(proTInfo.current)} ref={proTCon} className='projectTarjetaImg'> 

            <div className="contenedorTarjetaInfo unselectable" ref={proTInfo}>
                <ProjectInfo textInfo={textInfo} hrefLive={hrefLive} hrefGit={hrefGit}/>
            </div>

            <img className="imgProject" src={urlImg} alt={name} />
    </div>
           
           
           );
           
        }
           
export default ProjectTarjetaImg;