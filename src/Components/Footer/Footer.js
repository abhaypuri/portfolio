import React, { Component } from 'react';
import {Link} from 'react-scroll';
import ContactIcons from '../Icons/Icons.js';
import './Footer.css'

class Contact extends Component {
  render(){
    return(

      <div className='contact'>
        <ContactIcons iconClass={'contact-icons'}/>
        <div className = "contact-link">
          <Link to="home" smooth={true} offset={-50}>
            <button style={{background: 'transparent', border: 'none'}} 
                    className="fas fa-chevron-up">
            </button>
          </Link>
        </div>
        <hr width='90%' className={'footer-line'} />
        <div>
          <p style={{'margin':'0', 'padding':'0 0 0 5px'}}>
            Abhay Puri &copy; {this.props.year}
          </p>
          <p style={{'margin':'0', 'padding':'0 0 0 5px'}}>
           
          </p>
        </div>
      </div>

    )
  }
}

export default Contact;