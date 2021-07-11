import React from 'react';
import './contact.styles.scss'
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
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="contactContainer">
          <form id="contact-form" className="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">

            <div className="contactNombre contactGeneral">
              <label htmlFor="name">NOMBRE</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>

            <div className="contactEmail contactGeneral">
              <label htmlFor="exampleInputEmail1">EMAIL</label>
              <input type="email" className="contactEmail" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>

            <div className="contactMensaje contactGeneral">
              <label htmlFor="message">MENSAJE</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>

            <button type="submit" className="contactEnviar contactGeneral">ENVIAR</button>
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
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
  }
  
  export default Contact;