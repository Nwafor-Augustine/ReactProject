import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Box, Grid, makeStyles, createStyles,Hidden, Drawer,Divider,IconButton,List,ListItem,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

let usestlye = makeStyles((theme) =>createStyles({
                 
         nav:{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                paddingTop:"2%"
                
                        
        },
        
        toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 250,
    },

           navLink: {
                   textDecoration: "none",
                   color: "green",
                   fontSize: '1rem',
                   margin:"5% 0%",
                   fontFamily: "Roboto",
                   fontWeight: "lighter",
                  
                   
        }
           
      ,
        title: {
          
     padding:"6% 0%",
     color: "green",
     textAlign:"center"
  }
         


})

     
)


export let Nav = (props) => {
        let classes = usestlye();
         
        let mobileNav = (
               <div>
     
        <Typography variant="h6" className={classes.title} >
                        Jbee School
        </Typography>  
     
         
      <Divider />
     
       <List component="nav" aria-label="dashboard navigation">
       
        <ListItem button>
             <NavLink to="/" className={classes.navLink} exact={true}>Home</NavLink>
           
        </ListItem>
     
                                
        <ListItem button>
          
           <NavLink to="/dashboard" className={classes.navLink} exact={true}>Dashboard</NavLink>
        </ListItem>

         
        
         <ListItem button>
              <NavLink to="/student" className={classes.navLink} exact={true}>Student</NavLink>
        </ListItem>

                                  
        
         <ListItem button >
            <NavLink to="/instructor" className={classes.navLink} exact={true}>Instructor</NavLink>
        </ListItem>

        
        <ListItem button>
              <NavLink to="/section" className={classes.navLink} exact={true}>Section</NavLink> 
         </ListItem>
                                
     
                                
        <ListItem button>
            <NavLink to="/library" className={classes.navLink} exact={true}>Library</NavLink>
        </ListItem>
             <Divider />                       
      </List>
   
    </div>  
        )
        return <Router >
                
                
                

                 <Hidden smDown implementation="css">
                           
                 
                 
                 <Grid className={classes.nav}>
             
                       <Box mr={{md:2,lg:5}}>
                       <NavLink to="/" className={classes.navLink} exact={true}>Home</NavLink>
                       </Box>
                       
                        <Box mr={{md:2,lg:5}}>
                               <NavLink to="/dashboard" className={classes.navLink} exact={true}>Dashboard</NavLink>
                       </Box>
                       
                       <Box mr={{md:2,lg:5}}>
                               <NavLink to="/student" className={classes.navLink} exact={true}>Student</NavLink>
                       </Box>
                        
                      
                       <Box mr={{md:2,lg:5}}>
                               <NavLink to="/instructor" className={classes.navLink} exact={true}>Instructor</NavLink>
                       </Box>

                       <Box mr={{md:2,lg:5}}>
                               <NavLink to="/section" className={classes.navLink} exact={true}>Section</NavLink>
                       </Box>

                       <Box>
                               <NavLink to="/library" className={classes.navLink} exact={true}>Library</NavLink>
                       </Box>
                 </Grid>
                
             </Hidden>
                
                      
                       
                

                       
                <Hidden mdDown implementation ="css">
                        
                        
                        <Drawer
                        
                        onClose={props.openMobileNav} open={props.open} classes={{
                        paper: classes.drawerPaper,
                                }}
                        >
                        
                        {mobileNav}
                        </Drawer>
                
                </Hidden>         
                    
                       

              
                        
        </Router>
                      
    
}