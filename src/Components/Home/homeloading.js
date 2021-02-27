import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
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

export default function HomeloadingScreen() {
  const classes = useStyles();
 
    const [open, setOpen] = React.useState(true);
 
    const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
              <ResponsiveDialog/>
      </Backdrop>
    </div>
  );
}








let  ResponsiveDialog = () =>{
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
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
         Sign up to my 'Reactjs School Management'
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            Login
          </Button>
          <Button onClick={handleClose} color="primary" >
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
