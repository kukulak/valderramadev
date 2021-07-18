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
    element.style.marginLeft = '5000px'
    element.style.width = '1500px'
}



function ProjectImg({notLive, urlImg, name, textInfo, hrefLive, hrefGit, text, caso}) {

    
    const proCon = React.createRef();
    const proInfo = React.createRef();
    return(

        <div onMouseOut={() => hoverOutAnim(proInfo.current)} onMouseOver={() => hoverAnim(proInfo.current)} ref={proCon} className='projectImg'> 

            <div className="contenedorInfo unselectable" ref={proInfo}>
                <ProjectInfo textInfo={textInfo} hrefLive={hrefLive} notLive={notLive} hrefGit={hrefGit} caso={caso} text={text}/>
            </div>
            <LazyLoad height={200}>
                <img className="imgProject" src={urlImg} alt={name} />
            </LazyLoad>
    </div>
           
           
           );
           
        }
           
export default ProjectImg;