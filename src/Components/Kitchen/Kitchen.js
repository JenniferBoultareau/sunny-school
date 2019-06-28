import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Modal } from 'react-materialize';
import './Kitchen.css';

function Kitchen() {
  return (
    <div className='bg-image-kitchen'>
    <div className='kitchen'>
      <Link to='/house'>
        <i class="medium material-icons">arrow_back</i>
      </Link>
          <Modal header="Modal Header" 
            bottomSheet 
            trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen1">
            <i class="material-icons">wb_sunny</i></a>}>
            Lorem
            </Modal>
          <Modal header="Modal Header" 
            bottomSheet 
            trigger={<a className="btn-floating btn-large yellow darken-1 pulse button-kitchen2">
            <i class="material-icons">wb_sunny</i></a>}>
            blablabla
            </Modal>
      </div>
    </div>
  )
};

export default Kitchen;
