import React from 'react';
import { connect } from 'react-redux';
import './basicBtn.styles.scss'
import './general.scss'

import Caso from './caso.component'


import { selectCollectionItem } from '../redux/shop-item/shop-item.selectors';


const CasoDetail = ({ caso, imgUno, imgDos, video, imgTres, nombre, info, ifLive }) =>{
    
    

    
            < Caso
            video={video}
            nombre={nombre}
            info={info}
            ifLive={ifLive}
            imgUno={imgUno}
            imgDos={imgDos}
            imgTres={imgTres}
            />
           
   
    };

    const mapStateToProps = (state, ownProps) => ({
        detailItem: selectCollectionItem(ownProps.match.params.detailId)(state)
      });  

export default connect(mapStateToProps)(CasoDetail);