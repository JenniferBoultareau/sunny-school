import React from 'react';
import './LivingRoom.css';
import { Row, Container, Modal } from 'react-materialize';

function LivingRoom() {
  return (
    <div className='bg-image-livingroom'>
        <Container >
          <Row className='parent-livingroom'>
            <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom1"><i class="material-icons">wb_sunny</i></a>}>
              Lorem
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