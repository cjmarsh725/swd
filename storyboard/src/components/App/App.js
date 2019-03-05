import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import ViewArea from '../ViewArea/ViewArea';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <ViewArea />
        </div>
      </Router>
    );
  }
}

export default App;
