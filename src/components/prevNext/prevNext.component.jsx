import React from 'react';
// import { connect } from 'react-redux';

import './prevNext.styles.scss'

import { withRouter } from 'react-router-dom';


// import { selectCollectionItem } from '../redux/shop-item/shop-item.selectors';



const PrevNext = ({ history, linkPrev, linkNext, imgPrev, imgNext }) =>{
    
    
    return(
        <div className='prevNextContainer' >
            
         


         
            <div className="cont Prev">
                <a onClick={() => history.push(`${linkPrev}`)} className="pnBtns" href={linkPrev} rel="noopener noreferrer"> 
                <h1 className="titulo Pr unselectable">
                Previo
                </h1>
                        {/* <img className="imgDir" src={imgPrev} alt='prev' /> */}
                </a>
            </div>

            <div className="cont Next">                
                <a onClick={() => history.push(`${linkNext}`)} className="pnBtns" href={linkNext} rel="noopener noreferrer">
                <h1 className="titulo Ne unselectable">
                Siguiente
                </h1>
                    {/* <img className="imgDir" src={imgNext} alt='next' /> */}
                </a>
            </div>
          
            
         
        </div>
           
           )
    };


export default withRouter(PrevNext);
