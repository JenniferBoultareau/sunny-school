import React from 'react';
import { Link } from 'react-router-dom';

import './Result.css';

const Result = () => {

  // to get the former best Result and current result of the Game in localstorage
  let myBestScore = localStorage.getItem('Solar_myBestScore');
  let myCurrentScore = localStorage.getItem('Solar_myCurrentScore');

  const setMyBestScore = (myBestScore, myCurrentScore) => {
    if (myBestScore < myCurrentScore) {
      myBestScore = localStorage.getItem('Solar_myCurrentScore');
    }
  };
  setMyBestScore(myBestScore, myCurrentScore);


 // to remove when everything is working on each pages of the game
  localStorage.removeItem('Solar_myBestScore');
  localStorage.removeItem('Solar_myCurrentScore');
  localStorage.setItem('Solar_myBestScore', '340')
  localStorage.setItem('Solar_myCurrentScore', '670');

  return(
    <div className='sum'>
      <div className='container container-result'>
        <div className='row top-row'>
          <div className='col s12 m6'>
            <div className='card orange darken-2  white-text'>

              <div className='card-content'>
                <h3 className='card-title'>Tu es le CHAMPION de l'énergie solaire!!</h3>
              </div>

              <div className='card-content'>
                <p>Ton score: {myCurrentScore} </p>
                <p>Ton meilleur score: {myBestScore} </p>
              </div>             
              
              <div className='card-content cyan-text text-accent-1'>
                <p>Calcul: 20/100 </p>
                <p>Grammaire: 100/100 </p>
                <p>Logique: 70/100 </p>
                <p>Histoire: 50/100 </p>
              </div>

              <div className='card-action'>
                <p className='replay'>
                  <Link to ='/'>
                    <span class='replay white-text'>REJOUER</span>
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div> 
      </div>
    </div>
  )
};

export default Result;