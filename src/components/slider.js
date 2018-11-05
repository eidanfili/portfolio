import React, { Component } from 'react';


class Slider extends Component {
    
    render() {
        return(
            <div id="slider">
                <a href="https://soundcloud.com/stream" className="control_next">next</a>
                <a href="#" className="control_prev">prev</a>
                <ul>
                    <li>SLIDE 1</li>
                    <li>SLIDE 2</li>
                    <li>SLIDE 3</li>
                    <li>SLIDE 4</li>
                </ul>
            </div>

        )
    }
}
export default Slider;