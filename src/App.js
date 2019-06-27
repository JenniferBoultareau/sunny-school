import React from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import Kitchen  from './Components/Kitchen/Kitchen';

function App() {
  return (
    <div className="App">
    <Kitchen />
    </div>
  );
}

export default App;
