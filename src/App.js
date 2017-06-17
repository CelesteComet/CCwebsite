import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

// Common Page Components
import DropDownMobile from './components/DropDownMobile.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={ DropDownMobile } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } /> 
          <Route exact path="/contact" component={ Contact } />           
          <Route path="/" component={ Footer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
