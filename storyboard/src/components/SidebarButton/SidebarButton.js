import React, { Component } from 'react';
import './SidebarButton.css';

class SidebarButton extends Component {
  render() {
    return (
      <div className="sidebarbutton-container">
        {this.props.text}
      </div>
    );
  }
}

export default SidebarButton;