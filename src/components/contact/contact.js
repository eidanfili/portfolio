import React, { Component } from 'react';
import Header from '../header';
import ContCard from './contactCard';
import { Link } from 'react-router-dom';
import ContCardHome from './contCardHome';
import Footer from '../footer';

class Contact extends Component {
    render() {
        return(
            <div>
                <div className="backpic contact">
                    <Header />
                    <h2 className="card__label">Contact Me</h2>
                    <div className="bar"></div>
                    <div className="card-container">
                        <Link to="/contact/instagram" className="card__button-right" >Instagram</Link>
                        <Link to="/contact/email" className="card__button-left" >Email</Link>
                        <ContCardHome title="Social Medias" buttonText="send it" to="/contact/email"/>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;