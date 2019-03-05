import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SidebarButton from '../SidebarButton/SidebarButton';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <Link to="/world" className="sidebar-button-container">
          <SidebarButton text="World"/>
        </Link>
        <Link to="/nations" className="sidebar-button-container">
          <SidebarButton text="Nations"/>
        </Link>
        <Link to="/races" className="sidebar-button-container">
          <SidebarButton text="Races"/>
        </Link>
        <Link to="/creatures" className="sidebar-button-container">
          <SidebarButton text="Creatures"/>
        </Link>
        <Link to="/magic" className="sidebar-button-container">
          <SidebarButton text="Magic"/>
        </Link>
        <Link to="/religion" className="sidebar-button-container">
          <SidebarButton text="Religion"/>
        </Link>
        <Link to="/guilds" className="sidebar-button-container">
          <SidebarButton text="Guilds"/>
        </Link>
      </div>
    );
  }
}

export default Sidebar;