import { Link, BrowserRouter as Router } from 'react-router-dom'
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
                       <Box mr={3}>
                       <Link to="/" className={classes.navLink}>Home</Link>
                       </Box>
                       
                       <Box mr={3}>
                               <Link to="/student" className={classes.navLink}>Student</Link>
                       </Box>
                      
                       <Box mr={3}>
                               <Link to="/instructor" className={classes.navLink}>Instructor</Link>
                       </Box>

                       <Box mr={3}>
                               <Link to="/section" className={classes.navLink}>Section</Link>
                       </Box>

                       <Box>
                               <Link to="/library" className={classes.navLink}>Library</Link>
                       </Box>
                      
                       
                      
                       

                </Grid>
                        
        </Router>
                      
    
}