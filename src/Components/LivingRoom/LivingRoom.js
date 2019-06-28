import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Modal, Button, RadioGroup } from 'react-materialize';
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
            <RadioGroup
              name="size"
              withGap
              label="T-Shirt Size"
              value="xl"
              options={[{ label: 'Réponse A', value: 'xl' }, { label: 'Réponse2', value: 'l' }, { label: 'Réponse3', value: 'm' }]}
            />
            <Button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            /*onChange={() => }*/>
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