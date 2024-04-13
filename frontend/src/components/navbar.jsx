import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul class="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="nav"><b>JESTEŚMY WIELKIMI FANAMI WĘGLOWODANÓW</b></div>
      </nav>
    );
  }
}

export default Navbar;
