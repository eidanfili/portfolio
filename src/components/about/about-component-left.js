import React, { Component } from 'react';

class AboutComponentLeft extends Component {
    render() {
        const { imgURL, content } = this.props;
        return (
            <div className="about-component-left">
                <div className="about-component-left-text">
                    {content}
                </div>
                <div className="imageAbout">
                    <img src={imgURL} />
                </div>
                
            </div>
        )
    }
}
export default AboutComponentLeft;