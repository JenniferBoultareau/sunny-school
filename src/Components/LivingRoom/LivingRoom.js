import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';
import './LivingRoom.css';

function LivingRoom() {

  return (
    <div className='bg-image-livingroom'>
    <div className='parent-livingroom'>
        <Link to='/house'>
          <i class="medium material-icons">arrow_back</i>
        </Link>
          <Modal
            header="La question sur la TV"
            bottomSheet
            trigger={<a className="btn-floating btn-large purple accent-3 pulse button-livingroom1"><i className="material-icons">wb_sunny</i></a>}
          >
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
        </div>
    </div>
  )
};

export default LivingRoom;
