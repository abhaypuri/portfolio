import React, { Component } from 'react';
import './Icons.css';

class ContactIcons extends Component {
  render() {
    return(
      <div className = {this.props.iconClass}>
        <a href="https://www.facebook.com/abhay.puri.14" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-facebook-square icon-item"></i>
        </a>
        <a href="https://github.com/abhaypuri" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-github-square icon-item"></i>
        </a>
		<a href="https://twitter.com/Abhaypuri98" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-twitter-square icon-item"></i>
        </a>
        <a href="https://www.kaggle.com/abhaypuri98" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-kaggle icon-item"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhaypuri98/" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-linkedin icon-item"></i>
        </a>
        <a href="mailto:Abhaypuri98@gmail.com" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fas fa-envelope-square icon-item"></i>
        </a>
		<a href="https://www.instagram.com/puriabhay/" 
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-instagram icon-item"></i>
        </a>
      </div>
    )
  }
}

export default ContactIcons;