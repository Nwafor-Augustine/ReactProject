import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Modal from 'react-modal'




 let Pop = (props) => {

  const theme = useTheme();
   
     
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
     
      <div>
    
      <Modal
              isOpen={true}
              className={"modal"}
          >
              {props.show}
              
          </Modal>
     </div>
         
        

  );
}

export default Pop;