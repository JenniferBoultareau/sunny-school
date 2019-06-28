import React, { useState, useEffect } from 'react';
import './Bathroom.css';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';




export default function Bathroom() {
  const [response, setResponse] = useState();
  const [phlo, setPhlo] = useState(false);

  const multipleAction = () => {
    setPhlo(false);
    setResponse()
  }

  return (
    <div className='hero'>
      <div className='bathroom'>
      <Modal 
        header="La question sur la baignoire ? Sélectionne la bonne réponse:" 
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
                  {label: 'Réponse A',value: 'false'},
                  {label: 'Réponse B',value: 'correct'},
                  {label: 'Réponse C',value: 'false'}
                ]}
              />
          :
            (response === 'correct') ? <div>'Bonne réponse'</div>:<div>'Mauvaise réponse'</div>
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