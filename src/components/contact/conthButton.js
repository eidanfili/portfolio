import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContHButton extends Component {
    render() {
        const { href, logo, text } = this.props;
        return(
            <div className="cardh__button__icons">
                <a target="_blank" href={href} className="cardh__button">
                    <i className={logo}></i>
                </a>
                <div className="iconText">{text}</div>
            </div>
        )
    }
}
export default ContHButton;