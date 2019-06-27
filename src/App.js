import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import { Route } from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js'; 

function App() {
  return (
    <div className="App">
    <Route path="/house" exact component={Summary} />
    <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
