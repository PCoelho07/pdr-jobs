
import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Info from './Info';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <div className="header__nav">
            <div className="header__logo">
              <img src="" alt="logo" />
            </div>
            <nav className="header__navlink">
              <a className="header__navlink--first" href="#">a rits</a>
              <a href="#">nossos valores</a>
              <a className="header__navlink--last" href="#">Vagas abertas</a>
            </nav>
          </div>
          <Jumbotron />
          <Info />
        </div>
      </header>
    );
  }
}
