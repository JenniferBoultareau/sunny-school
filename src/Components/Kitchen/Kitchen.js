import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import './Kitchen.css';

function Kitchen() {
  const [response, setResponse] = useState();
  const [phlo, setPhlo] = useState(false);

  const multipleAction = () => {
    setPhlo(false);
    setResponse()
  }

  return (
    <div className='bg-image-kitchen'>
    <div className='kitchen'>
      <Link to='/house'>
        <i class="medium material-icons">arrow_back</i>
      </Link>
          <Modal 
            header="Où se trouve le plus grand four solaire du monde ? " 
            bottomSheet 
            actions={
              <Button onClick= {multipleAction
              } modal="close" flat >Fermer</Button>
              }
              options = {
                {dismissible:false
            }
            }  
            trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen1">
            <i class="material-icons">wb_sunny</i></a>}>
            { !phlo ? 
                < RadioGroup
                radioClassNames	= 'bathtub-radio'
                onChange={(event) => setResponse(event.target.value) }
                name='question'
                withGap
                value={response}
                options={[
                  {label: 'Dans l’ouest des Etats-Unis',value: 'false'},
                  {label: 'En Chine ',value: 'false'},
                  {label: 'Dans le sud de la France',value: 'correct'}
                ]}
              />
          :
            (response === 'correct') ? <div>'Bonne réponse. 
              Le Four d’Odeillo est situé à Font-Romeu dans les Pyrénées catalanes dans le sud de la France. 
              Mis en service en 1970, il est plus grand que l’Arc de Triomphe et sa puissance est d’un megawatt.'</div>:<div>'Dommage... Mauvaise réponse. Le Four d’Odeillo est situé à Font-Romeu dans les Pyrénées catalanes dans le sud de la France. 
              Mis en service en 1970, il est plus grand que l’Arc de Triomphe et sa puissance est d’un megawatt.'</div>
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
          <Modal header="Utilise-t-on plus d’eau chaude en faisant sa vaisselle à la main ou au lave-vaisselle ?" 
            bottomSheet 
            actions={
              <Button onClick= {multipleAction
              } modal="close" flat >Fermer</Button>
              }
              options = {
                {dismissible:false
            }
            }  
            trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen2">
            <i class="material-icons">wb_sunny</i>
            </a>}>
            { !phlo ? 
                < RadioGroup
                radioClassNames	= 'bathtub-radio'
                onChange={(event) => setResponse(event.target.value) }
                name='question'
                withGap
                value={response}
                options={[
                  {label: 'A la main',value: 'false'},
                  {label: 'Au lave-vaisselle',value: 'correct'},
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
      </div>
    </div>
  )
};

export default Kitchen;
