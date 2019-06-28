import React, {useState} from 'react';
import './LivingRoom.css';
import { Row, Container, Modal, Button, RadioGroup } from 'react-materialize';

function LivingRoom() {
    
  return (
    <div className='bg-image-livingroom'>
      <Container >
        <Row className='parent-livingroom'>
          <Modal 
            header="La question sur la TV" 
            bottomSheet 
            trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom1"><i className="material-icons">wb_sunny</i></a>}
            >
            <RadioGroup
              name="size"
              withGap
              label="T-Shirt Size"
              value="xl"
              options={[{label: 'Réponse A',value: 'xl'},{label: 'Réponse2',value: 'l'},{label: 'Réponse3',value: 'm'}]}
              />
           <Button 
            className='btn waves-effect waves-light' 
            type='submit' 
            name='action'>
            ok
            </Button>
          </Modal>
          <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom2"><i class="material-icons">wb_sunny</i></a>}>
            bla
          </Modal>
        </Row>
      </Container>
    </div>
  )
};

export default LivingRoom;