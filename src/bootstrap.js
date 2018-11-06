import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import history from './history';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import About from './components/about/about';
import ContactEmail from './components/contact/contact-email';
import ContactOther from './components/contact/contact-other';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/projects" component={Projects}/>
          <Route path="/contact/email" component={ContactEmail}/>
          <Route path="/contact/other" component={ContactOther} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
