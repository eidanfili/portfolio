import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContHButton extends Component {
    render() {
        const { href, logo } = this.props;
        return(
            <div>
                <a href={href} className="cardh__button">
                    <i className={logo}></i>
                </a>
            </div>
        )
    }
}
export default ContHButton;