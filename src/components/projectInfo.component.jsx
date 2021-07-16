import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addItem } from '../redux/cart/cart.actions';

import './projectInfo.styles.scss'

import Infotext from './infoText.component'

import iconLive from '../assets/icons/web.svg'
import iconGit from '../assets/icons/github.svg'

import BasicBtn from './basicBtn.component';

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';



const ProjectInfo = ({caso, item, history, match, icono, hrefLive, hrefGit, textInfo, text}) =>{
    // const { caso, imgUno, imgDos, imgTres, nombre, info, ifLive, linkUrl } = item;
   
    return(

        <div className='projectInfo'> 
        <p>{textInfo}</p>
        {/* <Infotext /> */}
        <div className="botones">
            <div onClick={() => history.push(`${caso}`)} className="btnCaso">Ver Caso</div>
            <BasicBtn icono={iconLive} href={hrefLive} text='Live' />
            <BasicBtn icono={iconGit} href={hrefGit} text='GitHub' />
        </div>
            
    </div>
           
        );
    };


const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
});


export default connect (null, mapDispatchToProps)(withRouter(ProjectInfo));

// export default ProjectInfo;