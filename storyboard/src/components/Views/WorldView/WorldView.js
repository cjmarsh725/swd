import React, { Component } from 'react';
import './WorldView.css';

class WorldView extends Component {
  render() {
    return (
      <div className="worldview-container">
        <h1>Seranin</h1>
        <img className="world-map" src="img/seranin-world-map.png" alt="Seranin World Map" />
        <section className="world-description">
          <p>Seranin is a world comprised of eleven countries, three on islands of various size and eight more on a single landmass.</p>
        </section>
      </div>
    );
  }
}

export default WorldView;