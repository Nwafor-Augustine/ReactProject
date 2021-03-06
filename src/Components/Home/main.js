import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import {Features }from './schoolFeatures'
import { Grid, Typography, Avatar, Box, IconButton ,makeStyles, Container,Divider,Paper, Button,ButtonGroup } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import zIndex from '@material-ui/core/styles/zIndex';
import { startLoginAccount } from '../firebase/actions'
import {connect} from 'react-redux'

let usestyle = makeStyles(theme =>({
    root: {
        marginTop: "10vh",
       
        
    },
    
    img0:{
        width:"100%",
        maxWidth:400,
        maxHeight: 200,
        [theme.breakpoints.down("md")]: {
           
            maxWidth:350,
        },
          [theme.breakpoints.up("md")]: {
            float:"right"
        },

        [theme.breakpoints.down("sm")]: {
             
             position:"static",
             
           
        },


            [theme.breakpoints.down("xs")]: {
             
                maxWidth: 500,
                 maxHeight:250
        }
          
       
       
        
    },
    img1: {
         
        width: "100%",
        maxWidth:400,
        maxHeight:200,
        position: "absolute" ,
        top:"70%",
        left: "20%",
        zIndex: 100,
        [theme.breakpoints.down("md")]: {
            zIndex: 0,
            left: "10%",
            maxWidth:350,
        },
      
       [theme.breakpoints.down("sm")]: {
             
             top: "0%",
             left: "0%",
             position: "static",
        
            
            
        },
            [theme.breakpoints.down("xs")]: {
             
                maxWidth: 500,
                maxHeight:250
        }
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
         marginTop: "35vh",
       
           
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
             
        paddingTop: "10vh",
        paddingBottom: "10vh",
           
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
        marginTop: "30vh",
        textAlign: "center",
        

           
    },

    registerInnerText: {
        color: green[500],
        fontSize: "1.1rem",
        backgroundColor: "white",
        textTransform:"capitalize",
        padding: 8,
            "&:hover": {
                color: "white",
                backgroundColor:green[500]
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
                        <Grid item lg={12}>
                           
                        </Grid>
                            <Grid item lg={9}>
                                <Typography  variant="h3"  className={classes.intro}>
                                    My React School Management System <br></br>
                                    With Firebase Authentication
                                <IconButton>
                                
                                </IconButton>
                                </Typography>
                            </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.registerbtn}>
                            <ButtonGroup size="small" variant="outlined">
                            <Button variant="outlined" className={classes.registerInnerText} onClick={props.logIn}>Apply now
                            </Button>
                            <Button variant="outlined" className={classes.registerInnerText} onClick={props.logIn}>Read more....
                            </Button>
                            </ButtonGroup>
                            
                        </Grid>
                        </Grid>
                
                </Container>
                </section>
         <section className={classes.section2} >
                 
                <Container maxWidth={"lg"} className={classes.section2Container}>
                    
                    <Grid container spacing={1} >
                    
                       <Features/>
                    </Grid>

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