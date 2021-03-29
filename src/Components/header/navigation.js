import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import  Dashboard from '@material-ui/icons/Dashboard'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import { Box, Grid, makeStyles, createStyles,Hidden, Drawer,Divider,IconButton,List,ListItem,Typography,ListItemIcon} from '@material-ui/core'
import {orange} from '@material-ui/core/colors';

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
                   color: orange[500],
                   fontSize: '1rem',
                   margin:"5% 0% 5% 5%",
                   fontFamily: "Roboto",
                   fontWeight: "lighter",
                  
                   
        }
           
      ,
        title: {
          
     padding:"6% 0%",
     color:orange[500],
     textAlign:"center"
  },
         
     

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
                        
     <Router>
       <List component="nav" aria-label="dashboard navigation">
                        
        <ListItem button>
        <ListItemIcon>
          <Dashboard/>
        </ListItemIcon>
          
           <NavLink to="/dashboard" className={classes.navLink} exact={true}>Dashboard</NavLink>
        </ListItem>

         
        
         <ListItem button>
              <ListItemIcon>
                <PersonIcon/> 
               </ListItemIcon>
              <NavLink to="/student" className={classes.navLink} exact={true}>Student</NavLink>
        </ListItem>

                                  
        
         <ListItem button >
         <ListItemIcon>
          <PersonIcon/> 
          </ListItemIcon>
                              
            <NavLink to="/instructor" className={classes.navLink} exact={true}>Instructor</NavLink>
         </ListItem>
                                
                                <ListItem button>
                                         <ListItemIcon>
                                            <SchoolIcon/> 
                                        </ListItemIcon>
              
              <NavLink to="/section" className={classes.navLink} exact={true}>Section</NavLink> 
         </ListItem>
                                
     
                                
                                <ListItem button>
                                        <ListItemIcon>
                                             <LibraryBooksIcon/>    
                                        </ListItemIcon>
                                  
            <NavLink to="/library" className={classes.navLink} exact={true}>Library</NavLink>
        </ListItem>
             <Divider />                       
      </List>
                        
     </Router>
     
   
    </div>  
        )
        return <React.Fragment>
                
                
                

                 <Hidden smDown implementation="css">
                           
                 
                 
                 <Grid className={classes.nav}>
             
                       
                       
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
                    
                       

              
                        
        </React.Fragment>
                      
    
}