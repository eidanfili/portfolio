import React, { Component } from 'react';

class AboutComponentRight extends Component {
    render() {
        const { imgURL, content } = this.props;
        return(
            <div className="about-component-right">
                <div className="imageAbout">
                    <img src={imgURL} />
                </div>
                <div className="about-component-right-text">
                    {content}
                </div>
            </div>
        )
    }
}
export default AboutComponentRight;