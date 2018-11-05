import React, { Component } from 'react';
import TextLink from './textLinks';

class HeaderLink extends Component {
    render() {
        const { icon, to, title } = this.props;
        return (
            <div className='header-link'>
                <a className="header-link__title">{title}</a>
                <div className="header-link__icon">
                    <TextLink
                        to={to}
                        icon={`${icon} text-link`}
                    />
                </div>
            </div>  
        )
    }
}

const headerLinks = [
    {
        _id: 0,
        title: 'home',
        to: '/',
        icon: 'fas fa-home'
    },
    {
        _id: 1,
        title: 'about',
        to: '/about',
        icon: 'fas fa-info-circle'
    },
    {
        _id: 2,
        title: 'projects',
        to: '/projects',
        icon: 'fas fa-code-branch'
    },
    {
        _id: 3,
        title: 'contact',
        to: '/contact',
        icon: 'fas fa-mobile'
    },
]

class Links extends Component {
    render() {
        return (
            <div className="header__links">
                {
                    headerLinks.map(data => {
                        return <HeaderLink key={data._id} {...data} />
                    })
                }
     
            </div>
        )
    }
}
export default Links;

