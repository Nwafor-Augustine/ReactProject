

import React,{useState} from 'react'
import {Nav} from './navigation'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton,Fade} from '@material-ui/core';
import {Container,Grid,Box, Hidden} from '@material-ui/core';
import { green } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({

  menuButton: {
      marginRight: theme.spacing(2),
    color: "white",
    textDecoration:"none"
  },
  root:{
      width:"100%"
  },
  title: {
 
     color: "green"
  },
  
  link: {
       marginRight: theme.spacing(2),
      backgroundColor: "#03A61C",
          
  },

  
    bkgColor: {

      backgroundColor:"white"
      
  },
    
   login:{
   
     color: green[500],
     float: "right",
     fontSize: "0.9rem",
     fontWeight:600,
     "&:hover": {
                color: "white",
                backgroundColor:green[500]
       }
    
    
  },
   
  menuChangDir: {
      
   }
   
}));


let Header = (props)=> {
    
    const classes = useStyles();
  let [open, setopen] = useState(false)
  let openMobile = () => {
    setopen(!open)
  }
        return (
        
              
              
                    
          
            <Container >
             <AppBar position="fixed" className={classes.bkgColor}  >   
              <Toolbar>

                
          
                <Grid container>
                  
                  <Grid item xs={6} lg={6} md={6}>
                      <Hidden mdUp implementation="css" >
                               <IconButton onClick={openMobile} >
                                 <MenuIcon />
                               </IconButton>
                              
                      </Hidden>
                    <Hidden smDown implementation="css" >
                      
                         <Typography variant="h6" className={classes.title} >
                        Jbee School
                         </Typography>  
                     </Hidden>
                          
                    
                  </Grid>
                   
                   
                  <Grid item lg={4} md={4}>
                  
                   <Nav openMobileNav={openMobile} open={open}/>
                    
                    
                  </Grid>


                    <Grid item xs={6} lg={2} md={2}>
                      
                    <Button variant="text" className={classes.login}>SIGN OUT</Button>
                  
                    </Grid>
                     
                </Grid>
                        
                
                  
                     
                       
                   </Toolbar>
            </AppBar>
          
            </Container>

            
     
                       
             
  
        
              
              
          
        )
    
}

export default  Header