import React, { Component } from 'react';


import ContHButton from './conthButton';

class ContCard extends Component {
    render() {
        const { title } = this.props;
        return(
            <form className={` ${title} card-home`}>
                <label className="cardh__labels">{title}</label>
                <div className="cardflex">
                    <ContHButton to="/contact/instagram" buttonText="instagram"/>
                    <ContHButton to="/contact/github" buttonText="github" />
                    <ContHButton to="/contact/facebook" buttonText="facebook" />
                    <ContHButton to="/contact/email" buttonText="email" />
                </div>
                
            </form>
        )
    }
}
export default ContCard;