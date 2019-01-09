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
                    <div className="cardlinks">
                        <ContHButton href="https://www.instagram.com/eidanledezma/" logo="fab fa-instagram iconc" />
                        <ContHButton href="https://github.com/eidanfili" logo="fab fa-github iconc" text="GitHub" />
                        <ContHButton href="https://www.facebook.com/eidan.ledezma" logo="fab fa-facebook iconc" text="Facebook"/>
                        <EmailButton to="/contact/email" logo="fas fa-envelope iconc" />
                    </div>
                </div>
                
            </form>
        )
    }
}
export default ContCard;