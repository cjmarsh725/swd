import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import ViewArea from '../ViewArea/ViewArea';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <ViewArea />
      </div>
    );
  }
}

export default App;
