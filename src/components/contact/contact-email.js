import React, { Component } from 'react';
import Header from '../header';
import ContCard from './contactCard';
import { Link } from 'react-router-dom';

class ContactEmail extends Component {
    render() {
        return (
            <div>
                <div className="backpic contact">
                    <Header />
                    <h2 className="card__label">Contact Me</h2>
                    <div className="bar"></div>
                    <div className="card-container">
                        <Link to="/contact/instagram" className="card__button-right" >Instagram</Link>
                        <Link to="/contact/email" className="card__button-left" >Email</Link>
                        <ContCard title="Email Me" to="/contact"/>
                    </div>

                </div>
            </div>
        )
    }
}
export default ContactEmail;
