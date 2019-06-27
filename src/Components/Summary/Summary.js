import React from 'react';

import bathroom from '../../assets/summary/';
import buanderie from '../../assets/img/summary/buanderie.jpg';
import bureau from '../../assets/img/summary/bureau.jpg';
import cuisine from '../../assets/img/summary/cuisine.jpg';
import bedroom from '../../assets/img/summary/bedroom.jpg';
import escalier from '../../assets/img/summary/escalier.jpg';
import salon from '../../assets/img/summary/salon.jpg';


const Summary = () => {
  return(
    <div>
      <img src={bathroom} alt=''></img>
      <img src={buanderie} alt=''></img>
      <img src={bureau} alt=''></img>
      <img src={cuisine} alt=''></img>
      <img src={bedroom} alt=''></img>
      <img src={escalier} alt=''></img>
      <img src={salon} alt=''></img>
    </div>
  )
};

export default Summary;