import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul class="nav">
          <li><a href="#"><i class="fas fa-home"></i></a></li>
          <li><a href="#"><i class="fas fa-info-circle"></i></a></li>
          <li><a href="#"><i class="fas fa-cogs"></i></a></li>
          <li><a href="#"><i class="fas fa-envelope"></i></a></li>
        </ul>
        <div className="nav"><b>JESTEŚMY WIELKIMI FANAMI WĘGLOWODANÓW</b></div>
      </nav>
    );
  }
}

export default Navbar;
