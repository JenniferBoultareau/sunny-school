import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-materialize';
import './ChildrenBedroom.css';

export default function ChildrenBedroom() {
  return (
    <div className='hero'>
      <div className='childroom'>
        <Link to='/house'>
      <i class="medium material-icons">arrow_back</i>
      </Link>
        <Modal
          header="La question sur la chambre 1"
          bottomSheet
          trigger={<a className='btn-floating btn-large pulse deep-orange cupboard'>
            <i className='material-icons'>control_point</i>
          </a>}>
          Prends un pull au lieu de mettre le chauffage à fond
        </Modal>
        <Modal
          header="La question sur la chambre 2"
          bottomSheet
          trigger={<a className='btn-floating btn-large pulse deep-orange window'>
            <i className='material-icons'>control_point</i>
          </a>}>
          Attention aux courants d'air.
      </Modal>
      </div>
    </div>
  )
}