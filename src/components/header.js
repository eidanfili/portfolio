import React, { Component } from 'react';
import Links from './links';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <img className="header__logo" src="\assets\reactpic.png"/>
                <Links />
            </div>
        )
    }
}
export default Header;