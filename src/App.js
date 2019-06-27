import React from 'react';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import { Route } from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js'; 
import './App.css';

function App() {

  const initM = () => {
    M.AutoInit();
  }; initM();

  return (
    <div className="App">
    <Route path="/house" exact component={Summary} />
    <Route path="/" exact component={Home} />
    </div>
  );
  
}

export default App;
