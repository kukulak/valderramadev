import React, { Component, useState, useEffect, useContext } from 'react';
import './portada.styles.scss'

// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';


import { gsap, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



function Portada (){

    const full = React.createRef();
    const dev = React.createRef();
    const pj = React.createRef();
    const [projects, setProjects] = useState([]);   
    const [ultraClass, setUltraClass] = useState([]);
    

    useEffect(() => {
        gsap.to(full.current,
            {
                // y: 0,
                ease: 'none',
                // duration: 2,
                xPercent: -112,
                opacity: -0.3,
                scrollTrigger:{
                    trigger: ".portada",
                    // start: "top center",
                    // end: "bottom 100px",
                    // end: () => "+=" + document.querySelector(".portada").offsetWidth,
                    pin: true,
                    // pinSpacing: false,
                    scrub: 1,
                    markers: false
                    // toggleActions: "play pause resume pause",
                },
            }
        )
    }, [full]);


    useEffect(() => {
        gsap.to(dev.current,
            {
                // y: 0,
                ease: 'none',
                // duration: 2,
                xPercent: 112,
                opacity: -0.3,
                scrollTrigger:{
                    trigger: ".portada",
                    // start: "top center",
                    // end: "bottom 100px",
                    // end: () => "+=" + document.querySelector(".portada").offsetWidth,
                    pin: true,
                    // pinSpacing: false,
                    scrub: 1,
                    markers: false
                    // toggleActions: "play pause resume pause",
                },
            }
        )
    }, [dev]);



    useEffect(() => {
        gsap.to(pj.current,
            {
                // x: 0,
                ease: 'none',
                // duration: 2,
                yPercent: -700,
                opacity: -0.5,
                scrollTrigger:{
                    trigger: ".portada",
                    // start: "top center",
                    // end: "bottom 100px",
                    // end: () => "+=" + document.querySelector(".portada").offsetWidth,
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    // opacity: 0,
                    markers: false,
                    id: "portada"

                    // toggleActions: "play pause resume pause",
                },
            }
        )
    }, [pj]);

return (

    <div  className='portada'> 
        {/* <h1>
            fullStack
            developer 

            style={{alignSelf: 'start'}}
            style={{alignSelf: 'end'}}
        </h1> */}
        <div className="contenedorPortada">
            <h1 ref={full} className='full' >
                fullStack
            </h1>
            <p ref={pj} className='pyhon'>
                    Python & javascript
            </p>
            <h1 ref={dev} className='developer' >
                developer    
            </h1>    
        </div>
    </div>
           
   
)

}

export default Portada;