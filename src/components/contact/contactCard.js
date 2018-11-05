import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ContCard extends Component {
    render() {
        const { title, to, buttonText } = this.props;
        return(
            <form className={` ${title} card`}>
                <label className="card__labels">{title}</label>
                <input type="text"placeholder="Your Email" className="card__input"/>
                <input type="text" placeholder="Message" className="card__input" />
                <Link to={to}  className="card__button">{buttonText}</Link>
                
            </form>
        )
    }
}
export default ContCard;