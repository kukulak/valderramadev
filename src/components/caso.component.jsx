import React from 'react';
// import { connect } from 'react-redux';
import './basicBtn.styles.scss'
import './general.scss'

import './caso.styles.scss'



import LazyLoad from 'react-lazyload';
{/* <LazyLoad height={200}></LazyLoad>
<LazyLoad height={200} once ></LazyLoad>
 <LazyLoad height={200} offset={100}></LazyLoad> */}


// import { selectCollectionItem } from '../redux/shop-item/shop-item.selectors';



const Caso = ({ notLive, caso, imgPrincipal, imgUno, imgDos, video, imgTres, nombre, info, ifLive, gitHub, stack, imgCuatro }) =>{
    
    
    return(
        <div className='caso' >
            
            <video src={process.env.PUBLIC_URL + video}></video>
            {/* process.env.PUBLIC_URL + video */}
            <h1 className="nombre">
                {nombre}
            </h1>
            {/* <LazyLoad height={200}>
             <img className="imgPrincipal" src={imgPrincipal} alt={caso} />
            </LazyLoad> */}

            <div className="casoDetails">
                
                <div className="info">
                    <div className="tecContainer">
                        <p className="tecnologias"> Desarrollo</p>
                        <p className="rolCaso">
                            {info}  
                        </p>
                    </div>    
                    <div className="tecContainer">
                        <p className="tecnologias">
                            Tecnologías
                        </p>
                        <p className="stackCaso">
                            {stack}
                        </p>
                    </div>
                </div>

                <div className="btnsCaso">
                    <a href={ifLive} target="_blank" className={notLive} rel="noopener noreferrer">VISITA LA PÁGINA</a>
                    <a href={gitHub} target="_blank" rel="noopener noreferrer">GITHUB</a>
                </div>
            </div>
            
            <div className="contenedorImages">
                <LazyLoad height={200}>
                    <img className="img" src={imgUno} alt={caso} />
                </LazyLoad>
                <LazyLoad height={200}>
                    <img className="img" src={imgDos} alt={caso} />
                </LazyLoad>
                <LazyLoad height={200}>
                    <img className="img" src={imgTres} alt={caso} />
                </LazyLoad>
                <LazyLoad height={200}>
                   <img className="img" src={imgCuatro} alt={caso} />
                </LazyLoad>
            </div>
        </div>
           
           )
    };

    // const mapStateToProps = (state, ownProps) => ({
    //     detailItem: selectCollectionItem(ownProps.match.params.detailId)(state)
    //   });  

// export default connect(mapStateToProps)(Caso);

export default Caso;
