import React from 'react';

import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';

import Kitchen  from './Components/Kitchen/Kitchen';
import Summary from './Components/Summary/Summary';


// import { link } from 'fs';


function App() {

  const initM = () => {
    M.AutoInit();
  }; initM();

  return (
    <div className="App">
      {/* <Kitchen /> */}
      <Summary />
    </div>
  );
  
}

export default App;
