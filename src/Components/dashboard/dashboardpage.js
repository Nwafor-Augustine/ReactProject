import React from "react"
import {Link} from 'react-router-dom'
import {Nav} from '../header/navigation'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import ListItemIcon  from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {CssBaseline,AppBar,Button,useMediaQuery,Grid,Box, Container} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { green,grey,orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import Instructors from '../Instructor/ListOfIinstructor'
import  ListOfBooks from '../Library/ListBooks'
import ListOfsemester from '../Semester/ListOfSemester'
import ListOfstudent from '../Student/ListOfStudent'
import Studentfeature from '../dashboradFeatures/studentfeatures'
import Instructorfeature from '../dashboradFeatures/instructorfeature'
import Libraryfeature from '../dashboradFeatures/library feactures'
import Semesterfeature from '../dashboradFeatures/semesterfeatures'
import ListItem from '@material-ui/core/ListItem';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu'
import { startLogoutAccount } from '../firebase/actions'

import {connect} from 'react-redux'


const drawerWidth = 250;


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },

    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
        backgroundColor: "white"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color:green[500],
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      },
     
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor:orange[500]
    },

    content: {
      flexGrow: 1,
      marginTop:"12vh"
    },
    
    logo:{
      textAlign: "center",
      color:green[500]
    },

    loginbtn: {
      color:orange[500],
      float: "right",
      "&:hover": {
        color: "white",
        backgroundColor: orange[500]
      }
      
    },
    navigationColor: {
      textDecoration:"none",
      color: "white",
      fontSize: '1rem',
      fontFamily: "Roboto",
      fontWeight: "lighter",
    },
   
 
    
  })
)



 function DashboradPage(props) {
    let matches = useMediaQuery('(min-width:900px)');
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
    
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
     
          <h1 className={classes.logo}>
          JBee
          </h1>
     
         
      <Divider />
     
       <List component="nav" aria-label="dashboard navigation">
       
        <ListItem button>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <Link to="/dashboard" className={classes. navigationColor}  exact={true}>Dashboard</Link>
        </ListItem>
     
        
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
        <Link to="/student" className={classes.navigationColor} >Student</Link>
        </ListItem>

       
        
         <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Link to="/instructor" className={classes.navigationColor} >Instructor</Link>
        </ListItem>

        
         <ListItem button >
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
         <Link to="/section" className={classes.navigationColor} >Section</Link> 
        </ListItem>

       
        
          <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
           <Link to="/library" className={classes.navigationColor} >Library</Link>
        </ListItem>

      </List>
   
      <Divider />

      <List>
        
         <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About"  className={classes. navigationColor} />
        </ListItem>


         <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon  />
          </ListItemIcon>
          <ListItemText primary="Contact"  className={classes. navigationColor} />
        </ListItem>

        
         <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Features" className={classes. navigationColor} />
        </ListItem>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<div className={classes.root}>
      <CssBaseline />
  <AppBar position="fixed" className={classes.appBar}>
       <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            >
            <MenuIcon />
           
          </IconButton>
                  
          <Grid container >
            
            <Grid item xs={4}  lg={10}  >
                          
            </Grid> 
            
             
                 
                   <Grid item xs={8} lg={2} >
              <Button variant="text"  className={classes.loginbtn} onClick={props.logout}>Log Out</Button>    
              
                  </Grid> 
         
           </Grid>  
         </Toolbar>
  </AppBar>


 <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      
      <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
        
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
              
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            >

            
            {drawer}
          </Drawer>
      </Hidden>


      <Hidden xsDown implementation="css">
        <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
        </Drawer>
        </Hidden>
        

  </nav>







      <Container className={classes.content}>
        
         <Grid container spacing={4}>
          
                    <Grid item lg={6} md={6} sm={12}  xs={12}>
                        <Studentfeature />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                       <Instructorfeature />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Libraryfeature/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                       <Semesterfeature />
                    </Grid>
          <ListOfsemester/>
          
          </Grid>
          
      </Container>
   
    </div>
  );
}



export default connect(undefined,(dispatch) => (
 {
    logout:()=> dispatch(startLogoutAccount())
 }
))(DashboradPage)



