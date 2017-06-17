import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom'

class DropDown extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    }
  }

  toggleMenu() {
    if(this.state.menuActive) {
      this.setState({
        menuActive: false
      })
    } else {
      this.setState({
        menuActive: true
      })
    }
  }

  render() {
    var nav;
    if(this.state.menuActive) {
      nav = 
          
            <ul>
              <li><Link onClick={this.toggleMenu} to={"/"}>Home</Link></li>
              <li><Link onClick={this.toggleMenu} to={"/about"}>About</Link></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          
    } else {
      nav = null;
    }

    return(
      <div>
        <header className="mobile-header">
          <p>MENU</p>
          <div onClick={this.toggleMenu} className="collapse-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
        <ReactCSSTransitionGroup className="nav" component="nav"
          transitionName="nav"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          >{nav}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default DropDown;