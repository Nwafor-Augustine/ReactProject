import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import {Features }from './schoolFeatures'
import { Grid, Typography, IconButton ,makeStyles, Container,Divider, Button,ButtonGroup,Link, Hidden } from '@material-ui/core'
import {green,blueGrey,orange} from '@material-ui/core/colors'
import zIndex from '@material-ui/core/styles/zIndex';
import { startLoginAccount } from '../firebase/actions'
import { connect } from 'react-redux'
import logo from '../../images/logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let usestyle = makeStyles(theme =>({
    root: {
        marginTop: "10vh",
       
        
    },
    
   
    intro: {
        color:"white",
        textAlign:"left",
        marginTop: "20vh",
        position:"relative",
        zIndex: 100,
        paddingLeft: "8%",
        
        [theme.breakpoints.down("sm")]: {
             
         paddingLeft: "0%",
         fontSize: "2.5rem",
         marginTop: "20vh",
       
           
        },


        [theme.breakpoints.down("xs")]: {
             
     
        fontSize: "2rem",
        
           
        }
    },

    heard__intro:{
        color: green[500],
        paddingTop: "20px",
        paddingBottom: "20px",
        
        [theme.breakpoints.down("xs")]: {
             
     
        fontSize: "1.5rem",
        textAlign: "center", 
           
        }
    },

    header__subtitle: {
        marginBottom: "30px",
           
        [theme.breakpoints.down("xs")]: {
             
     
        fontSize: "1.2rem",
        textAlign: "center", 
           
        }
    },

    section2: {
        minHeight: "100vh",
        display: "flex",
        alignItems:"center"
       
    },
    section2Container:{
        paddingTop: "10vh",
        paddingBottom: "10vh",
           
        [theme.breakpoints.down("xs")]: {
             
        paddingTop: "5vh",
        paddingBottom: "5vh",
           
        }
       
       
    },
    imageGrid:{
        position: "relative",
        marginTop:"15vh",
         
       [theme.breakpoints.down("sm")]: {
             textAlign:"center"
            
        },
  
       [theme.breakpoints.down("xs")]: {
             
           paddingLeft: "0px",
           marginTop:"0vh"
           
        }
    },

    innerImageGrid: {
                
        [theme.breakpoints.down("xs")]: {
           
            textAlign:"center",
            width:"100%"
        }
    },
     avatar: {
         backgroundColor: green[500],
         color: "black",
         
    },
     
    listoption: {
        display: "grid",
        fontSize: "1.3rem",
        gridTemplateColumns: "50px 1fr",
        columnGap: "3px",
        textAlign: "left",
        
           
        [theme.breakpoints.down("xs")]: {
             
     
            fontSize: "1rem",
            padding:"0px 10px"
      
           
        }
       
       
    },

    
    subHeader: {
        fontSize: "1.2rem",
        color: green[500],
        opacity: .6,
        margin: "15px 0px ",
           
        [theme.breakpoints.down("xs")]: {
             
     
        fontSize: "1rem",
        padding:"0px 15px"
           
        }
        

       
    },
    registerbtn: {
        marginTop: "20vh",
        textAlign: "center",
        [theme.breakpoints.down("sm")]:{
               marginTop: "10vh",
        }
        

           
    },

    registerInnerText: {
        color: orange[500],
        fontSize: "1.1rem",
        backgroundColor: "white",
        textTransform:"capitalize",
        padding: 8,
            "&:hover": {
                color: "white",
                backgroundColor:orange[500]
       }
        
    },
    logo: {
       width: 60,
       height: 60,
       borderRadius: "50%",
    zIndex: 100,
      position: "relative"
    },


    logoContainer: {
        paddingTop:6
    },


    linkContainer: {
        padding:"2% 0%"
    },
    link: {
        color: orange[500],
        textDecoration: "none",
        fontSize: "1rem",
        marginRight: "5%",
        position: "relative",
        lineHeight:"40%",
        zIndex: 100,
        "&:hover": {
            color: "white",
            textDecoration: "none",
            cursor:"pointer"
        }
    }


  
}))






const Main = (props) => {
      let classes = usestyle()
    return (

        <React.Fragment>
               <section className={"section"}>
                      <div className={"shadow"}></div>
                    <Container maxWidth="xl" >
                        
                    <Grid container >
                        
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <Grid container >
                            <Grid item lg={8} md={8} sm={8} xs={8} className={classes.logoContainer}>
                            <img className={classes.logo} src={logo}></img>
                            </Grid>
                                <Hidden xsDown  implementation="js">
                                <Grid item lg={4} md={4} sm={4} xs={4} className={classes.linkContainer}>
                                    <Link to="/" className={classes.link}>About</Link>
                                    <Link to="/" className={classes.link}>Contact</Link>
                                    <Link to="/" className={classes.link}>Blog</Link>
                                 </Grid>
                                </Hidden>
                            
                            </Grid>
                          <Divider/>
                        </Grid>
                            <Grid item lg={12}>
                                <Typography  variant="h3"  className={classes.intro}>
                                    School Management System <br></br>
                                    With Redux,Firebase Authentication And Database
                                <IconButton>
                                
                                </IconButton>
                                </Typography>
                            </Grid>
                        
                        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.registerbtn}>
                            <ButtonGroup size="small" variant="outlined">
                            <Button  className={classes.registerInnerText} onClick={props.logIn}>Apply
                            </Button>
                            <Button  className={classes.registerInnerText}>Read more<ExpandMoreIcon />
                            </Button>
                            </ButtonGroup>
                            
                        </Grid>
                        </Grid>
                
                </Container>
                
                </section>
         <section className={classes.section2} >
                 
                <Container maxWidth={"lg"} className={classes.section2Container}>
                  
                    <Grid container spacing={1} >
                      
                        <Features />
                    
                    </Grid>
                      <Divider/>
                    </Container>
                </section>
        </React.Fragment>
         

    )
}
export default connect(undefined,(dispatch)=>{

  return {
     logIn: ()=> dispatch(startLoginAccount())
  }

})(Main)