import React from 'react';

import bathroom from '../../assets/img/summary/bathroom.jpg';
import buanderie from '../../assets/img/summary/buanderie.jpg';
import bureau from '../../assets/img/summary/bureau.jpg';
import cuisine from '../../assets/img/summary/cuisine.jpg';
import bedroom from '../../assets/img/summary/bedroom.jpg';
import escalier from '../../assets/img/summary/escalier.jpg';
import salon from '../../assets/img/summary/salon.jpg';


const Summary = () => {
  return(
    <div>
  
      <div class="row">
        <img src={bureau} alt='salon'/>
      </div> 
      
      <div class="row">
        <img src={bedroom} alt='salon'/>
        <img src={escalier} alt='salon'/>
        <img src={bathroom} alt='salon'/>
      </div> 
      
      <div class="row">
        <img src={salon} alt='salon'/>
        <img src={cuisine} alt='salon'/>
      </div> 

      <div class="row">
        <img src={buanderie} alt='salon'/>
      </div> 

    </div>
  )
};

export default Summary;