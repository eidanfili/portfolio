import React, { Component }  from "react";

import { Link } from "react-router-dom";

export class EmailButton extends Component {
    render() {
        const { to, buttonText } = this.props;
        return (
            <div >
                <Link to={to} className="cardh__button">{buttonText}</Link>
            </div>
        )
    }
}