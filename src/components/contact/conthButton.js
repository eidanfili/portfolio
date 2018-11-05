import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContHButton extends Component {
    render() {
        const { to, buttonText, href } = this.props;
        return(
            <div>
                <a href={href} className="cardh__button">{buttonText}</a>
            </div>
        )
    }
}
export default ContHButton;