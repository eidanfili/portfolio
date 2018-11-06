import React, { Component } from 'react';
import Header from './header';
import Video from './video';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <Video />
          <Header />
          <div className="app__content">
            <div className="app__content__text">
            Hi I'm Eidan Ledezma a junior react and python developer
            </div>
          <div className="app__content__redbox"></div>
          </div>
          <Footer />
      </div>
    );
  }
}
