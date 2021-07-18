import React from 'react';
import './projectImg.styles.scss'
import '../components/general.scss'


import ProjectInfo from './projectInfo.component'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';
import LazyLoad from 'react-lazyload';
{/* <LazyLoad height={200}></LazyLoad>
<LazyLoad height={200} once ></LazyLoad>
 <LazyLoad height={200} offset={100}></LazyLoad> */}




function hoverAnim(element){
    element.style.marginLeft = '0px'
    element.style.width = '-webkit-fill-available'
}

function hoverOutAnim(element){
    element.style.marginLeft = '4600px'
    element.style.width = '500px'
}



function ProjectTarjetaImg({notLive, caso, urlImg, name, textInfo, hrefLive, hrefGit}) {

    
    const proTCon = React.createRef();
    const proTInfo = React.createRef();
    return(

        <div onMouseOut={() => hoverOutAnim(proTInfo.current)} onMouseOver={() => hoverAnim(proTInfo.current)} ref={proTCon} className='projectTarjetaImg'> 

            <div className="contenedorTarjetaInfo unselectable" ref={proTInfo}>
                <ProjectInfo caso={caso} notLive={notLive} textInfo={textInfo} hrefLive={hrefLive} hrefGit={hrefGit}/>
            </div>
            <LazyLoad height={200}>
                <img className="imgProject" src={urlImg} alt={name} />
           </LazyLoad>
    </div>
           
           
           );
           
        }
           
export default ProjectTarjetaImg;