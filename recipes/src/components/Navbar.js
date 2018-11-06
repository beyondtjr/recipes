import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className = "Navbar">
          <div className="hoverNav" ><a href="Home"> Home </a></div>
          <div className="hoverNav" ><a href="recipes"> Recipes </a></div>
          <div className="hoverNav" ><a href="About"> About </a></div>
      </div>
    );
  }
}

export default Header;
