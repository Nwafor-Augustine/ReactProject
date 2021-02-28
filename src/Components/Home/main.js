import React from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import  img0 from '../../images/helena-lopes-UZe35tk5UoA-unsplash.jpg'
import img1 from '../../images/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import { Grid, Typography, Avatar, Box, IconButton ,makeStyles, Container, } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import zIndex from '@material-ui/core/styles/zIndex';

let usestyle = makeStyles({
    root: {
        marginTop: "10vh",
       
        
    },
    
    img:{
        width:400,
        maxWidth:  "100%",
        maxHeight:200
       
        
    },
    intro: {
        color:"white",
        textAlign:"left",
        marginTop: "20vh",
        position:"relative",
        zIndex: 100,
        paddingLeft:"8%"
    },

    heard__intro:{
        color: green[500],
        paddingBottom: "25px",
        
    },

    header__subtitle: {
        marginBottom:"30px"
    },

    section2: {
        minHeight: "100vh",
      
       
    },
    section2Container:{
        paddingTop: "20vh",
        paddingBottom:"20vh"
       
       
    },
    imageGrid:{
        position: "relative",
        paddingLeft:"20px"
    
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
        textAlign:"left",
       
       
    },

    
    subHeader: {
        fontSize: "1.2rem",
        color: green[500],
        opacity: .6,
        margin:"2px 0px "
        

       
    }
  
})






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
                 
                    <Container  className={classes.section2Container}>
                        <Grid container spacing={10} >
                            <Grid item lg={6} md={6}>
                                
                            <Typography variant="h3" className={classes.heard__intro}>
                                Welcome to JBEE
                            </Typography>
                               
                            
                                <Typography variant="h5" className={classes.header__subtitle}>
                                The main entity of the database are Students,Instructors,Departments and Sections
                                </Typography> 
                                
                               
                                 <h4 className={classes.subHeader}>Instructors</h4>

                                <div className={classes.listoption}>
                                    <IconButton>
                                    <Avatar className={classes.avatar}  >
                                           <PersonIcon/>
                                      
                                    </Avatar>
                                    </IconButton>   
                                 <p> click to view the list of instructors in the school  </p>
                                   
                                </div>



                                 <h4 className={classes.subHeader}>Departments</h4>

                                <div className={classes.listoption}>
                                    <IconButton>
                                    <Avatar className={classes.avatar}  >
                                           <LibraryBooksIcon />
                                      
                                    </Avatar>
                                    </IconButton>   
                                 <p> click to view the list of departments in the school  </p>
                                   
                                </div>
                                
                               <h4 className={classes.subHeader}>Books</h4>

                                <div className={classes.listoption}>
                                    <IconButton>
                                     <Avatar className={classes.avatar}  >
                                        <LibraryBooksIcon />
                                    
                                    </Avatar> 
                                    </IconButton>
                                <p>click to view the list of book in the school </p>
                                    
                                </div>
                                       
                                <h4 className={classes.subHeader}>Students</h4>
                       
                           <div className={classes.listoption}>
                                   
                                    <IconButton>
                                         <Avatar className={classes.avatar}  >
                                            <PersonIcon />
                                         </Avatar>
                                    </IconButton> 
                                <p> click to view the list of student in the school  </p>
                                   
                                </div>

                          
                        </Grid>


                        <Grid item  lg={6} md={6}>
                                <Grid container justify="flex-end"  className={classes.imageGrid}>
                                <Box  >
                            
                                    <img src={`${img0}`} className={classes.img}>
                                    </img>
                            
                               
                                </Box>

                                 <Box  position="absolute" top="90%" left="20%" zIndex={100}>
                                    
                                    <img src={`${img1}`} className={classes.img}>
                                    </img>
                                
                                  </Box>
                                </Grid>
                            
                        </Grid>
                    </Grid>
                    </Container>
                </section>
        </React.Fragment>
         

    )
}