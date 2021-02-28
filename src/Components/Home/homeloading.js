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
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    header: {
      backgroundColor: green[500],
      height: "50px",
      margin:"10px 10px 0px 10px"
    },
    text:{
      paddingTop:"20px"
    },

    button: {
      color:green[500],
    }
  }),
);








 const   ResponsiveDialog = () =>{
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  
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
        <DialogTitle id="responsive-dialog-title" className={classes.header}>{"Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.text}>
         Sign up to my 'Reactjs School Management'
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} className={classes.button}>
            Login
          </Button>
          <Button onClick={handleClose} className={classes.button} >
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default   ResponsiveDialog 