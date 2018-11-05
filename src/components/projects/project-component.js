import React, { Component } from 'react';

class ProjectComponent extends Component {
    render() {
        const { imgURL, content, icon } = this.props;
        return (
            <div className="project-component">
                <div className="project-component__text">
                    {content}
                    <div className="project-component__icon">
                        <i className={icon} ></i>
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