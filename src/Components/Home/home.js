
import React from 'react'
import { makeStyles, Container, CssBaseline, Grid, Typography, Avatar, Box, createMuiTheme } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import HomeloadingScreen from './homeloading'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import  img0 from '../../images/helena-lopes-UZe35tk5UoA-unsplash.jpg'
import img1 from '../../images/javier-trueba-iQPr1XkF5F0-unsplash.jpg'

let usestyle = makeStyles({
    root: {
        marginTop:"10vh"
    },
    
    img:{
        width: "100%",
        maxWidth: 600,
        maxHeight:300
       
        
    },
    intro: {
        color:"white",
        textAlign:"left",
        marginTop:"20vh"
    },
    section2: {
        height: "100vh" ,
       
    },
    section2Container:{
        paddingTop: 120,
       
    },
    imageGrid:{
    position:"relative"
    
    },
     avatar: {
      backgroundColor: green[500],
    }

  
})



let Home = () => {
    
    let classes = usestyle()
        return (
            <main className={classes.root}>
                <CssBaseline />
                <HomeloadingScreen />
                
                <section className={"section"}>
                 <Container maxWidth="xl" >
                        <Grid container >
                            <Grid item lg={9}>
                                <Typography  variant="h3"  className={classes.intro}>
                                    My React School Management System <br></br>
                                    With Firebase
                                </Typography>
                            </Grid>
                            <Grid item lg={3}></Grid>
                        </Grid>
                 
                </Container>
                </section>
       
                <section className={classes.section2} >
                 
                    <Container  maxWidth="xl" className={classes.section2Container}>
                        <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <Typography variant="h4">
                                Welcome to JBEE
                            </Typography>
                            <Typography variant="h6" >
                                The main entity of the database are Students,Instructors,Departments and Sections
                            </Typography>
                                <h4>Departments</h4>
                            <Box display="flex">

                                
                                        <Avatar className={classes.avatar}  >
                                         <LibraryBooksIcon />
                                        </Avatar>       click to view the list of departments in the school
                                
                       
                            </Box>

                                <h4>Students</h4>
                            <Box display="flex">
                            
                                  
                                        <Avatar className={classes.avatar} >
                                         <LibraryBooksIcon />
                                        </Avatar>   click to view the list of Students in the school
                        
                       
                            </Box>
                                <h4>Books</h4>
                            <Box display="flex">

                        
                                 
                                        <Avatar className={classes.avatar} >
                                         <LibraryBooksIcon />
                                        </Avatar>  click to view the list of Book in the school
                            
                       
                            </Box>
                        </Grid>


                        <Grid item  lg={6}>
                                <Grid container justify="center"  className={classes.imageGrid}>
                                <Box  >
                            
                                    <img src={`${img0}`} className={classes.img}>
                                    </img>
                            
                               
                                </Box>

                                 <Box  position="absolute" top="90%" left="9%" zIndex={100}>
                                    
                                    <img src={`${img1}`} className={classes.img}>
                                    </img>
                                
                                  </Box>
                                </Grid>
                            
                        </Grid>
                    </Grid>
                    </Container>
                   
                    
                        
                   
                </section>

            </main>

            
              
          
        )
    
}

export default Home