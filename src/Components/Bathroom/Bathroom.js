import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import './Bathroom.css';

export default function Bathroom() {
  const [responseBathtub, setResponseBathtub] = useState();
  const [responseLavabo, setResponseLavabo] = useState();
  const [answerBathtub, setAnswerBathtub] = useState(false);
  const [answerLavabo, setAnswerLavabo] = useState(false);

  return (
    <div className='hero1'>
      <div className='bathroom'>
      <Link to='/house'>
      <i class="medium material-icons">arrow_back</i>
      </Link>
      <Modal 
        header='Pour moins consommer d’eau chaude, vaut-il mieux prendre une douche ou un bain?' 
        bottomSheet
        actions={
          <Button onClick= {multipleAction
          } modal="close" flat >Fermer</Button>
          }
          options = {
            {dismissible:false
        }
        }      
        trigger=
          {<a className='btn-floating btn-large pulse bathtub pink'>
            <i className='material-icons'>control_point</i>
          </a>}>
          { !phlo ? 
                < RadioGroup
                radioClassNames	= 'bathtub-radio'
                onChange={(event) => setResponse(event.target.value) }
                name='question'
                withGap
                value={response}
                options={[
                  {label: 'Bain',value: 'false'},
                  {label: 'Douche',value: 'correct'}
                ]}
              />
          :
            (response === 'correct') ? <div>'Bonne réponse. Une baignoire correctement remplie équivaut à 5 à 7 douches. Si tu dois choisir entre douche et bain, 
              choisis la douche sans hésitation. A condition de ne pas y rester plus de 5-10 minutes!'</div>:<div>'Dommage... Mauvaise réponse. Une baignoire correctement remplie équivaut à 5 à 7 douches. Si tu dois choisir entre douche et bain, 
                choisis la douche sans hésitation. A condition de ne pas y rester plus de 5-10 minutes!'</div>
        }
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick = {() => setPhlo(true)}
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>
      </Modal>
      <Modal 
        header="Une famille utilise 412l d’eau par jour. Calcule sa consommation pendant une semaine?" 
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
              {label: '2884 litres',value: 'correct'},
              {label: '2060 litres',value: 'false'},
              {label: '4120 litres',value: 'false'}
            ]}
          />
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick = {() => setAnswerLavabo(true)}
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>
        </Modal>
      </div>
    </div>
  )
}