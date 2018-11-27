import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render () { 
      return (
          <nav className="navbar">
              <h3 className="navbar" href="/">Office Clicking Game</h3>
              <p className="nav-item">{this.props.status}</p>
              <span className="navbar-text">Score: {this.props.score} | Highest score: {this.props.topScore}</span>
          </nav>
      )
  }
}

export default Navbar;