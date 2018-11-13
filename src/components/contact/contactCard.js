import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ContCard extends Component {
    render() {
        const { title, to, buttonText } = this.props;
        return(
            <form action="mailto:eidan@eidanfili.org" method="post" enctype="text/plain" className="card" >
                <label className="card__labele">{title}</label>
                <input type="text" name="message" placeholder="Message" className="card__inputs" />
                <input type="submit" value="send" className="card__button"/>
                
            </form>
        )
    }
}
export default ContCard;