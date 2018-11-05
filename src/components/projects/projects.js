import React, { Component } from 'react';
import Header from '../header';
import Video from '../video';
import ProjectComponent from './project-component';
import Footer from '../footer';

class Projects extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="projects">
                    <h2 className="label">Projects</h2>
                    <div className="bar"></div>
                    <div className="projects__container">
                        <ProjectComponent icon="fas fa-arrow-circle-right" imgURL="/assets/projects/Capture.png" content="lkdajshfpiue4h"/>
                        <ProjectComponent icon="fas fa-arrow-circle-right"imgURL="/assets/projects/sensuous-sandwich.png" content="lkdajshfpiue4h" />
                        <ProjectComponent icon="fas fa-arrow-circle-right"imgURL="/assets/projects/Propman.png" content="lkdajshfpiue4h" />
                        <ProjectComponent icon="fas fa-arrow-circle-right" imgURL="/assets/projects/Propman.png" content="hi this is my property management app click the icon to visit the page!"/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Projects;