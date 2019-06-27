import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';

import './App.css';
import Bathroom from './Components/Bathroom/Bathroom';

function App() {
  return (
    <div className="App">
      <Bathroom/>
    </div>
  );
}

export default App;