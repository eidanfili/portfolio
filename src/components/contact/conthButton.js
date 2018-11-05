import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContHButton extends Component {
    render() {
        const { to, buttonText } = this.props;
        return(
            <div>
                <Link to={to} className="cardh__button">{buttonText}</Link>
                <a href="https://www.instagram.com/eidanledezma/"></a>
            </div>
        )
    }
}
export default ContHButton;