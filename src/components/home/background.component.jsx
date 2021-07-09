// import React from 'react';
// import './background.styles.scss'
// import { Parallax } from 'react-scroll-parallax';
// import { Parallax, Background } from 'react-parallax';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

// const FullBackground = () =>(


  
//             <div className='fullBackground'> </div>
       

   
           
   
// );

// export default FullBackground;







// const Container = () => (
//     <Parallax strength={300}>
//         <Background className="custom-bg">
//             <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
//         </Background>
//     </Parallax>
// );









import React, { useState } from 'react';
import './background.styles.scss'

import { render } from '@testing-library/react';

import { Parallax, Background } from 'react-parallax';



import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

function numero(num, numDom){
    num = 0
    numDom = -18200
    if (num > numDom ) {
        console.log("estoy en el rango")
    } else {
        console.log("te pasas")
    }
}

class FullBackground extends React.Component {
    constructor(){
        super();
        
        this.state = {
           projects:[
            
            ]
        }
    };


    componentDidMount(){


        // let container = document.querySelector("#back");

        // let height;
        // function setHeight() {
        // height = container.clientHeight;
        // document.body.style.height = height + "px";
        // }
        // ScrollTrigger.addEventListener("refreshInit", setHeight);

        // // smooth scrolling container
        // gsap.to(container, {
        // y: () => -(height - height),
        // ease: "none",
        // scrollTrigger: {
        //     trigger: document.body,
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1,
        //     invalidateOnRefresh: true
        // }
        // });            


      


    }



 


    render(){

        return(
            // <div id='backs' className='fullBackground'> 

            <Parallax
            bgImage={process.env.PUBLIC_URL + 'img/fondorayos.png'} 
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            
                    {/* <Background className="custom-bg">
                    <img src= {process.env.PUBLIC_URL + 'img/fondorayos.png'} alt="" />
                      
                    </Background> */}
                </Parallax>


            // </div>
        )
    }

           
    
}

export default  FullBackground;