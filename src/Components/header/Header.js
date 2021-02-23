

import React from 'react'
import Nav from './navigation'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import {Container,Grid} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({

  menuButton: {
      marginRight: theme.spacing(2),
    color: "white",
    textDecoration:"none"
  },
  title: {
    flexGrow: 1,
  },
  
  link: {
       marginRight: theme.spacing(2),
    backgroundColor: "#03A61C",
          
  },

  
    bkgColor: {

      backgroundColor: "green"
      
  },
    
   login:{
    backgroundColor: "white",
    color:"black"
   }
   
}));


let Header = (props)=> {
    
    const classes = useStyles();
        
        return (
        
              
              
                    
          
            <Container >
             <AppBar position="fixed" className={classes.bkgColor}  >   
                    <Toolbar>
                  <Grid container >
                  <Grid item sm={12} md={5} lg={6} >
                     
                       <Typography variant="h6" className={classes.title}>
                       {props.check ? <IconButton><MenuIcon /></IconButton>:undefined}
                          Jbee School
                        </Typography>
                  </Grid>
                     <Grid item sm={12}   md={6} lg={5}>
                    
                    </Grid>
                 
                    <Grid item sm={12}  md={1} lg={1}>
                     <Button variant="contained" className={classes.login}>Login</Button>
                    </Grid>
                     
                  </Grid>
                        
                     
                       
                   </Toolbar>
            </AppBar>
            {
                      
                   props.check ? props.nav:undefined
                      }
            </Container>

            
     
                       
             
  
        
              
              
          
        )
    
}

export default  Header