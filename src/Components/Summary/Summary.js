import React from 'react';

import bathroom from '../../assets/img/summary/bathroom.jpg';
import buanderie from '../../assets/img/summary/buanderie.jpg';
import bureau from '../../assets/img/summary/bureau.jpg';
import cuisine from '../../assets/img/summary/cuisine.jpg';
import bedroom from '../../assets/img/summary/bedroom.jpg';
import salon from '../../assets/img/summary/salon.jpg';

import './Summary.css';

const Summary = () => {
  return(
    <div class='sum'>
      <div class='container container-summary'>

          <div class='row top-row'>
            <img src={bureau} alt='salon'/>
          </div> 
          
          <div class='row row-middle'>
            <div class='col s12 m6'><img src={bedroom} alt='salon'/></div>
            <div class='col s12 m6'><img src={bathroom} alt='salon'/></div>
            <div class='col s12 m6'><img src={salon} alt='salon'/></div>
            <div class='col s12 m6'><img src={cuisine} alt='salon'/></div>
          </div> 

          <div class='row bottom-row'>
            <img src={buanderie} alt='salon'/>
          </div> 

        </div>
      </div>
  )
};

export default Summary;