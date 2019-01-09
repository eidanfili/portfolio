import React, { Component }  from "react";

import { Link } from "react-router-dom";

export class EmailButton extends Component {
    render() {
        const { to, logo } = this.props;
        return (
            <div className="icons">
                <Link to={to} className="cardh__button"><i className={logo}></i></Link>
            </div>
        )
    }
}