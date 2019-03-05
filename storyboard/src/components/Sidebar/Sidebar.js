import React, { Component } from 'react';
import SidebarButton from '../SidebarButton/SidebarButton';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <SidebarButton text="World"/>
        <SidebarButton text="Nations"/>
        <SidebarButton text="Races"/>
        <SidebarButton text="Creatures"/>
        <SidebarButton text="Magic"/>
        <SidebarButton text="Religion"/>
        <SidebarButton text="Guilds"/>
      </div>
    );
  }
}

export default Sidebar;