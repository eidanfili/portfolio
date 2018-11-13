import React, { Component } from 'react';


import ContHButton from './conthButton';
import { EmailButton } from './email-button';

class ContCard extends Component {
    render() {
        const { title } = this.props;
        return(
            <form className={` ${title} card-home`}>
                <label className="cardh__labels">{title}</label>
                <div className="cardflex">
                    <ContHButton href="https://www.instagram.com/eidanledezma/" logo="fab fa-instagram" />
                    <ContHButton href="https://github.com/eidanfili" logo="fab fa-github" />
                    <ContHButton href="https://www.facebook.com/eidan.ledezma" logo="fab fa-facebook" />
                    <EmailButton to="/contact/email" logo="fas fa-envelope" />
                </div>
                
            </form>
        )
    }
}
export default ContCard;