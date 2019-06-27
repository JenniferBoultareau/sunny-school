import React from 'react';
import './Kitchen.css';
import { Row, Container, Modal } from 'react-materialize';

function Kitchen() {
  return (
    <div className='bg-image-kitchen'>
        <Container >
          <Row className='parent-kitchen'>
            <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen1"><i class="material-icons">wb_sunny</i></a>}>
              Lorem
            </Modal>
            <Modal header="Modal Header" bottomSheet trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen2"><i class="material-icons">wb_sunny</i></a>}>
              blablabla
            </Modal>
          </Row>
        </Container>
    </div>
  )
};

export default Kitchen;
