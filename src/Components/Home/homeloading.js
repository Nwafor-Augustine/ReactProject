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
import { green,orange,yellow } from '@material-ui/core/colors'
import { connect } from 'react-redux'
import { startLoginAccount } from '../firebase/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    header: {
      backgroundColor: orange[500],
      height: "50px",
      margin:"10px 10px 0px 10px"
    },
    text:{
      paddingTop:"20px"
    },

    button: {
      color:"white",
      backgroundColor: orange[500],
      "&:hover": {
         backgroundColor: orange[700]
      }
    }
  }),
);








 const   ResponsiveDialog = (props) =>{
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

   const handleClose = () => {
    props.logIn()
    setOpen(false);
  };

  return (
    
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
         
          <Button onClick={handleClose} className={classes.button} >
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}

export default  connect(undefined,(dispatch)=>{
  return {
    logIn: ()=> dispatch(startLoginAccount())
  }
})(ResponsiveDialog)