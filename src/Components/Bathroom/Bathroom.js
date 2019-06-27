import React from 'react';
import './Bathroom.css';
import { Modal } from 'react-materialize';


export default function Bathroom() {
  return (
    <div className='hero'>
      <div className='bathroom'>
      <Modal 
      header="La question sur la baignoire que tu trouveras jamais la réponse" 
      bottomSheet 
      trigger={<a className='btn-floating btn-large pulse bathtub pink'>
      <i className='material-icons'>control_point</i>
      </a>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Modal>
      <Modal 
      header="La question sur le lavabo qui va te retourner le cerveau" 
      bottomSheet 
      trigger={<a className='btn-floating btn-large pulse lavabo pink'>
      <i className='material-icons'>control_point</i>
      </a>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Modal>
      </div>
    </div>
  )
}
