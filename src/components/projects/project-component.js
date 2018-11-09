import React, { Component } from 'react';

class ProjectComponent extends Component {
    render() {
        const { imgURL, content, icon, href } = this.props;
        return (
            <div className="project-component">
                <div className="project-component__text">
                    {content}
                    <div className="project-component__icon">
                        <a href={href} className={`${icon} icon-project`} ></a>
                    </div>
                </div>
                <div className="imageProject">
                    <img src={imgURL} />
                </div>
            </div>
        )
    }
}
export default ProjectComponent;