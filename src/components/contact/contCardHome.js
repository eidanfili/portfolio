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
                    <ContHButton href="https://www.instagram.com/eidanledezma/"  buttonText="instagram" />
                    <ContHButton href="https://github.com/eidanfili" buttonText="github" />
                    <ContHButton href="https://www.facebook.com/eidan.ledezma" buttonText="facebook" />
                    <EmailButton to="/contact/email" buttonText="email" />
                </div>
                
            </form>
        )
    }
}
export default ContCard;