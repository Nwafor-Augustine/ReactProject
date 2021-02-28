import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import  img0 from '../../images/helena-lopes-UZe35tk5UoA-unsplash.jpg'
import img1 from '../../images/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import { Grid, Typography, Avatar, Box, IconButton ,makeStyles, Container,Divider,Paper } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import zIndex from '@material-ui/core/styles/zIndex';

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
      
       
    },
    section2Container:{
        paddingTop: "20vh",
        paddingBottom: "20vh",
           
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
        

       
    }
  
}))






export const Main = () => {
      let classes = usestyle()
    return (

        <React.Fragment>
               <section className={"section"}>
                      <div className={"shadow"}></div>
                    <Container maxWidth="xl" >
                        
                        <Grid container >
                            <Grid item lg={9}>
                                <Typography  variant="h3"  className={classes.intro}>
                                    My React School Management System <br></br>
                                    With Firebase Authentication
                                </Typography>
                            </Grid>
                            <Grid item lg={3}></Grid>
                        </Grid>
                 
                </Container>
                </section>
         <section className={classes.section2} >
                 
                    <Container   className={classes.section2Container}>
                        <Grid container spacing={10} >
                            <Grid item lg={6} md={6} sm={12}>
                                     <Divider/>   
                            <Typography variant="h3" className={classes.heard__intro}>
                                Welcome to JBEE
                            </Typography>
                               
                                <Typography variant="h5" className={classes.header__subtitle}>
                                The main entity of the database are Students,Instructors,Departments and Sections
                                </Typography> 
                                
                            <Divider />
                            
                                 <h4 className={classes.subHeader}>Instructors</h4> 
                            <Paper elevation={6}  className={classes.listoption}>
                            
                                   <React.Fragment >
                                    <IconButton>
                                    <Avatar className={classes.avatar}  >
                                           <PersonIcon/>
                                      
                                    </Avatar>
                                    </IconButton>   
                                 <p> click to view the list of instructors in the school  </p>
                                   
                                </React.Fragment>
                            </Paper>

                            <h4 className={classes.subHeader}>Departments</h4>
 
                            <Paper elevation={6} color="inherit" className={classes.listoption}>
                                        <React.Fragment >
                                    <IconButton>
                                    <Avatar className={classes.avatar}  >
                                           <LibraryBooksIcon />
                                      
                                    </Avatar>
                                    </IconButton>   
                                 <p> click to view the list of departments in the school  </p>
                                   
                                </React.Fragment>
                            </Paper>
                                
                             <h4 className={classes.subHeader}>Books</h4>
                          
                          
                            <Paper  elevation={6} className={classes.listoption}>
                                 
                                <React.Fragment >
                                    <IconButton>
                                     <Avatar className={classes.avatar}  >
                                        <LibraryBooksIcon />
                                    
                                    </Avatar> 
                                    </IconButton>
                                <p>click to view the list of book in the school </p>
                                    
                                </React.Fragment>
                                      
                            </Paper>
                            
                               

                                   
                                   
                             <h4 className={classes.subHeader}>Students</h4>
                            
                            
                            <Paper elevation={6} className={classes.listoption}>
                             
                           <React.Fragment >
                                   
                                    <IconButton>
                                         <Avatar className={classes.avatar}  >
                                            <PersonIcon />
                                         </Avatar>
                                    </IconButton> 
                                <p> click to view the list of student in the school  </p>
                                   
                                </React.Fragment>
                            </Paper>
                            
                      
                          
                        </Grid>

                           
                            <Divider /> 

                        <Grid item lg={6} md={6} sm={12}>
                              
                                <Grid container   className={classes.imageGrid}>
                                <Grid item sm={12} className={classes.innerImageGrid}>
                            
                                    <img src={`${img0}`} className={classes.img0}>
                                    </img>
                            
                               
                                </Grid>

                                 <Grid item sm={12} className={classes.innerImageGrid}>
                                    
                                    <img src={`${img1}`} className={classes.img1}>
                                    </img>
                                
                                  </Grid>
                                </Grid>
                            
                        </Grid>
                    </Grid>
                    </Container>
                </section>
        </React.Fragment>
         

    )
}