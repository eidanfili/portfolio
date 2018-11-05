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
      </div>
    );
  }
}
