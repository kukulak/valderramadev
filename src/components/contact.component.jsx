import React from 'react';
import './contact.styles.scss'
import axios from 'axios';
import BasicBtn from './basicBtn.component'
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import {Link as ScrollLink} from 'react-scroll';

import iconMusic from '../assets/icons/Youtube-Music-Logo.png'


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        email: '',
        mensaje: '',
        mailSent: false,
        error: null
      }
    }

    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"https://valderrama.dev/contacto.php", 
        data:  this.state
      })
      .then((response)=>{
          this.setState({
              mailSent: response.data.sent
          }, () => console.log(this.state)) // NB! setState accepts callbacks
                
          
        if (response.data.status === 'success') {
          alert(this.state.nombre + " tu mensaje fue enviado."); 
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert(this.state.nombre + " el mensaje no se envió")
        }
      })
      .catch(error => this.setState({ error: error.message }));
    }

    resetForm(){
      this.setState({nombre: '', email: '', mensaje: ''})
    }
  
    render() {
      return(
        <div className="contactContainer">
          <form id="contact-form" className="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST" action="">

            <div className="contactNombre contactGeneral">
              <label htmlFor="name">NOMBRE</label>
              <input type="text" className="form-control" value={this.state.nombre} onChange={this.onNameChange.bind(this)} />
            </div>

            <div className="contactEmail contactGeneral">
              <label htmlFor="exampleInputEmail1">EMAIL</label>
              <input type="email" className="contactEmail" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>

            <div className="contactMensaje contactGeneral">
              <label htmlFor="message">MENSAJE</label>
              <textarea className="form-control" rows="5" value={this.state.mensaje} onChange={this.onMessageChange.bind(this)} />
            </div>

            <button type="submit" className="contactEnviar contactGeneral">ENVIAR</button>

            <div>
                    {this.state.mailSent &&
                        <div>Gracias por escribir, pronto me pondré en contacto.</div>
                    }
            </div>
          </form>

            <div className="linkMusic">
                <a href="https://music.youtube.com/watch?v=P8LCrzZ3VSU&feature=share" target="_blank" rel="noopener noreferrer">
                   <img src={ iconMusic } width="100" alt="youTubeMusic" />
                   </a>
                   <br /><br /> Escuchando 
            </div>

        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({nombre: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({mensaje: event.target.value})
    }
  
  }
  
  export default Contact;