import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, RadioGroup } from 'react-materialize';
import './LivingRoom.css';

function LivingRoom() {
    const [response, setResponse] = useState();
    const [phlo, setPhlo] = useState(false);
  
    const multipleAction = () => {
      setPhlo(false);
      setResponse()
    }

  return (
    <div className='bg-image-livingroom'>
    <div className='parent-livingroom'>
        <Link to='/house'>
          <i class="medium material-icons">arrow_back</i>
        </Link>
          <Modal
            header="Trouve le verbe dans la phrase suivante : 
            Hier, en quittant la maison, nous avons éteint la télé."
            bottomSheet
            actions={
              <Button onClick= {multipleAction
              } modal="close" flat >Fermer</Button>
              }
              options = {
                {dismissible:false
            }
            }  
            trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom1"><i className="material-icons">wb_sunny</i></a>}
          >
          { !phlo ? 
              < RadioGroup
              radioClassNames	= 'bathtub-radio'
              onChange={(event) => setResponse(event.target.value) }
              name='question'
              withGap
              value={response}
              options={[
                {label: 'quittant',value: 'false'},
                {label: 'avons éteint',value: 'correct'},
                {label: 'éteint',value: 'false'},
              ]}
            />
        :
          (response === 'correct') ? <div>'Bonne réponse. Pour moins consommer d’électricité, il est conseillé d’éteindre complètement 
            les appareils électroniques au lieu de les laisser en veille.'</div>:<div>'Mauvaise réponse. Pour moins consommer d’électricité, il est conseillé d’éteindre 
              complètement les appareils électroniques au lieu de les laisser en veille. '</div>
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
          <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom2"><i class="material-icons">wb_sunny</i></a>}>
            bla
          </Modal>
        </div>
    </div>
  )
};

export default LivingRoom;
