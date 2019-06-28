import React, { useState, useEffect } from 'react';
import './Bathroom.css';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

// const [result, setResult] = useState();

export default function Bathroom() {
  return (
    <div className='hero'>
      <div className='bathroom'>
      <Modal 
        header="La question sur la baignoire ? Sélectionne la bonne réponse:" 
        bottomSheet
        actions={
          <Button modal="close" flat >Fermer</Button>
          }
        trigger=
          {<a className='btn-floating btn-large pulse bathtub pink'>
          <i className='material-icons'>control_point</i>
          </a>}>
          <RadioGroup
            radioClassNames	= 'bathtub-radio'
            // onChange={onChange}
            name='question'
            withGap
            value=''
            options={[
              {label: 'Réponse A',value: 'correct'},
              {label: 'Réponse B',value: 'false'},
              {label: 'Réponse C',value: 'false'}
            ]}
          />
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>
      </Modal>
      <Modal 
        header="La question sur le lavabo ?" 
        bottomSheet 
        trigger=
        {<a className='btn-floating btn-large pulse lavabo pink'>
        <i className='material-icons'>control_point</i>
        </a>}>
        <RadioGroup
            radioClassNames	= 'bathtub-radio'
            // onChange={onChange}
            name='question'
            withGap
            value=''
            options={[
              {label: 'Réponse A',value: 'correct'},
              {label: 'Réponse B',value: 'false'},
              {label: 'Réponse C',value: 'false'}
            ]}
          />
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>      
        </Modal>
      </div>
    </div>
  )
}