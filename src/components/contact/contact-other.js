import React, { Component } from 'react';
import Header from '../header';
import ContCard from './contactCard';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class ContactOther extends Component {
    render() {
        return (
            <div>
                <div className="backpic contact">
                    <Header />
                    <h2 className="card__label">Contact Me</h2>
                    <div className="bar"></div>
                    <div className="card-container">
                        <Link to="/contact/other" className="card__button-right" >Other</Link>
                        <Link to="/contact/email" className="card__button-left" >Email</Link>
                        <form  className="card">
                            <label className="card__labels">This page is not Currently available</label>
                            <Link to="/contact" className="card__button">back</Link>

                        </form>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
export default ContactOther;