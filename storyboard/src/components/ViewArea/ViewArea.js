import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './ViewArea.css';
import WorldView from '../Views/WorldView/WorldView';
import NationsView from '../Views/NationsView/NationsView';
import RacesView from '../Views/RacesView/RacesView';
import CreaturesView from '../Views/CreaturesView/CreaturesView';
import MagicView from '../Views/MagicView/MagicView';
import ReligionView from '../Views/ReligionView/ReligionView';
import GuildsView from '../Views/GuildsView/GuildsView';

class ViewArea extends Component {
  render() {
    return (
      <div className="viewarea-container">
        <Route path="/world" component={WorldView} />
        <Route path="/nations" component={NationsView} />
        <Route path="/races" component={RacesView} />
        <Route path="/creatures" component={CreaturesView} />
        <Route path="/magic" component={MagicView} />
        <Route path="/religion" component={ReligionView} />
        <Route path="/guilds" component={GuildsView} />
      </div>
    );
  }
}

export default ViewArea;