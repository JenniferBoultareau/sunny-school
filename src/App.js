import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import Kitchen  from './Components/Kitchen/Kitchen';
import LivingRoom from './Components/LivingRoom/LivingRoom';

function App() {
  return (
    <div className="App">
    <Route exact path='/kitchen' component={Kitchen} />
    <Route exact path='/livingroom' component={LivingRoom} />
    </div>
  );
}

export default App;
