import React from 'react';
import './Kitchen.css';
import { Row, Container, Col, Modal, Button } from 'react-materialize';

function Kitchen() {
  return (
    <div className='bg-image'>
        <Container >
          <Row className='parent'>
            <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large cyan accent-2 pulse button1"><i class="material-icons">cl1</i></a>}>
              Lorem
            </Modal>
            <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large yellow darken-1 pulse button2"><i class="material-icons">cl2</i></a>}>
              blablabla
            </Modal>
          </Row>
        </Container>
    </div>
  )
};

export default Kitchen;
