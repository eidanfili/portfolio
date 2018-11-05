import React, { Component } from 'react';
import TextLink from './textLinks';

class FLinks extends Component {
    render() {
        const { icon, to, title } = this.props;
        return (
            <div className='footer-link'>
                <a className="footer-link__title">{title}</a>
                <div className="footer-link__icon">
                    <TextLink
                        to={to}
                        icon={`${icon} text-link`}
                    />
                </div>
            </div>
        )
    }
}

const footerlinks = [
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

class Footerlinks extends Component {
    render() {
        return (
            <div className="footer__links">
                {
                    footerlinks.map(data => {
                        return <FLinks key={data._id} {...data} />
                    })
                }
            </div>
        )
    }
}
export default Footerlinks;

