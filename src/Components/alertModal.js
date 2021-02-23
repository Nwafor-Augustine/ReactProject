import { Button } from '@material-ui/core';
import React from 'react';
import Modal from 'react-modal'


export default function ResponsiveDialog(props) {
 

  return (
    <Modal isOpen={props.openModal} ariaHideApp={false}>
      <h1>e</h1>
      <Button variant="contained" color="inherit" onClick={props.closeModalComfirm}>Comfirm</Button>
      <Button variant="contained" color="inherit" onClick={props.closeModalCancel}>Cancel</Button>
    </Modal>
  );
}