import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TextLink extends Component {
    render() {
        const { to, icon } = this.props;
        return (
            <Link to={to} className={`${icon} header-link__icon__icon`}/>
        )
    }
}
export default TextLink;
