import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import {Box,Grid,makeStyles,createStyles} from '@material-ui/core'

let usestlye = makeStyles(() =>createStyles({
                 
                nav:{
                display: "flex",
                flexDirection: "row",
                justifyContent:"right"
                
                        
        },
        
           navLink: {
                   textDecoration: "none",
                   color: "green",
                   fontSize:16,
                   fontFamily:"Roboto"
            }
         })

     
)


export let Nav = () => {
        let classes = usestlye();
            
       return <Router >
                <Grid className={classes.nav}>
                       <Box mr={5}>
                       <NavLink to="/" className={classes.navLink} exact={true}>Home</NavLink>
                       </Box>
                       
                       <Box mr={5}>
                               <NavLink to="/student" className={classes.navLink} exact={true}>Student</NavLink>
                       </Box>
                      
                       <Box mr={5}>
                               <NavLink to="/instructor" className={classes.navLink} exact={true}>Instructor</NavLink>
                       </Box>

                       <Box mr={5}>
                               <NavLink to="/section" className={classes.navLink} exact={true}>Section</NavLink>
                       </Box>

                       <Box>
                               <NavLink to="/library" className={classes.navLink} exact={true}>Library</NavLink>
                       </Box>
                      
                       
                      
                       

                </Grid>
                        
        </Router>
                      
    
}