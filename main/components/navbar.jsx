import React, { Component } from 'react';
//komponent stanowy
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li><a href="#"><i className="fas fa-home"></i></a></li>
          <li><a href="#"><i className="fas fa-info-circle"></i></a></li>
          <li><a href="#"><i className="fas fa-cogs"></i></a></li>
          <li><a href="#"><i className="fas fa-envelope"></i></a></li>
        </ul>
        <div className="nav"><b>JESTEŚMY WIELKIMI FANAMI WĘGLOWODANÓW</b></div>
      </nav>
    );
  }
}

export default Navbar;
