import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import  Dashboard from '@material-ui/icons/Dashboard'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import { Box, Grid, makeStyles, createStyles,Hidden, Drawer,Divider,IconButton,List,ListItem,Typography} from '@material-ui/core'
import { green} from '@material-ui/core/colors';

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
                   margin:"5% 0% 5% 5%",
                   fontFamily: "Roboto",
                   fontWeight: "lighter",
                  
                   
        }
           
      ,
        title: {
          
     padding:"6% 0%",
     color:green[500],
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
     
       <List component="nav" aria-label="dashboard navigation">
                        
        <ListItem button>
           <Dashboard/>
           <NavLink to="/dashboard" className={classes.navLink} exact={true}>Dashboard</NavLink>
        </ListItem>

         
        
         <ListItem button>
               <PersonIcon/>
              <NavLink to="/student" className={classes.navLink} exact={true}>Student</NavLink>
        </ListItem>

                                  
        
         <ListItem button >
            <PersonIcon/>                    
            <NavLink to="/instructor" className={classes.navLink} exact={true}>Instructor</NavLink>
         </ListItem>
                                
         <ListItem button>
              <SchoolIcon/>
              <NavLink to="/section" className={classes.navLink} exact={true}>Section</NavLink> 
         </ListItem>
                                
     
                                
        <ListItem button>
            <LibraryBooksIcon/>                       
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