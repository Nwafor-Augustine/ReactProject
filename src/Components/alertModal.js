
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);



export default function HomeloadingScreen(props) {
  const classes = useStyles();
 
 
  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.openModal} >
              <ResponsiveDialog openModal={props.openModal} closeModalComfirm ={props.closeModalComfirm} closeModalCancel={props.closeModalCancel} title={props.title} message={props.message} />
      </Backdrop>
    </div>
  );
}








let ResponsiveDialog = (props) => {
  

  const [open, setOpen] = React.useState(true);

  const theme = useTheme();
  
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
        {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeModalComfirm}  color="primary">
            Comfirm
          </Button>
          <Button onClick={props.closeModalCancel} color="primary" >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
