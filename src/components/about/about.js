import React, { Component } from 'react';
import Header from '../header';
import AboutComponent from './about-component';
import Footer from '../footer';



class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about backpic">
                    <h2 className="about__label">About Me</h2>
                    <div className="bar about__bar"></div>
                    <div className="about__right">
                        <AboutComponent imgURL="/assets/about/wrestling.jpg" content="I have wrestled for my highschool and have won awards for team leadership and dedication. I am also the orange county champion." />
                        <AboutComponent imgURL="/assets/about/age.jpg" content="I am currently 14 years old. I am also a freshman in highschool." />
                        <AboutComponent imgURL="/assets/about/edu.jpg" content="I learned to code React, Python, Flask, HTML and SCSS at Bottega tech.I am also currently in high school. I have a fullstack developement certificate" />
                    </div>
                    <div className="about__left">
                        <AboutComponent imgURL="/assets/about/chinese.jpg" content="Since first grade I have been learning chinese I am now fluent in mandarin chinese. I also come from mexican decent so naturally I grew up speaking spanish aswell. English however is my first and most domenant language probably beacause I grew up in the united states" />
                        <AboutComponent imgURL="/assets/about/coding.jpg" content="I learned to code from Bottega tech. Bottega is an amazing school and expierience and I am a proud student and friend of the people and the school. I learned to code beacause its always been something that has intrigued me as a kid and now that I know how to Im more interested it than ever." />
                        <AboutComponent imgURL="/assets/about/fam.jpg" content="I have a really cool family. First my father his name is Filiberto Ledezma he grew up in MexicoCity Mexico and came to the united states to go to school when he was 17. He has been a big inspiration in my life and has helped me become the person I am today. Next my Mom she is Keli Ledezma she grew up all over the united states which means she more american than anyone else I know but she is always doing some kind of helpful service and I truly aspire to have as much drive and happiness as she does." />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default About;