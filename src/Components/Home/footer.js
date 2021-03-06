import React from 'react'
import {Link} from 'react-router-dom'
import {green,blueGrey} from '@material-ui/core/colors'
import {makeStyles,Container,Grid,List,ListItem} from '@material-ui/core'



let usestyle = makeStyles({
    root: {
        height: "250px",
        maxWidth:"100%",
        backgroundColor: blueGrey[600],
        padding:"3% 0%"
       
        
    },
    link: {
        color: green[500],
        textDecoration:"none",
        fontSize: "1rem",
        "&:hover": {
            color:"white"
        }
    }
    
  
})

export const Footer = () => {
   let classes = usestyle()
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item lg={4} md={4} sm={12}>
                    <img></img>
                    <ListItem>
                        <Link className={classes.link}>Email:Nwaforaugustine@gmail.com</Link>
                    </ListItem>
                    <ListItem>
                        <Link className={classes.link}>Github</Link>
                    </ListItem>
                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                    <List>
                        <ListItem>
                        <Link className={classes.link}>About</Link>
                        </ListItem>
                        <ListItem>
                          <Link className={classes.link}>Contact</Link>
                        </ListItem>
                        <ListItem>
                           <Link className={classes.link}>Apply Guild</Link>
                        </ListItem>
                        <ListItem>
                         <Link className={classes.link}>Feature</Link>
                        </ListItem>
                         <ListItem>
                        <Link className={classes.link}>Num:07031045066</Link>
                    </ListItem>
                    </List>

                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                
                </Grid>
            </Grid>
        </div>
    )
}