import React from 'react'
import {Link} from 'react-router-dom'
import {green,blueGrey,orange} from '@material-ui/core/colors'
import {makeStyles,Container,Grid,List,ListItem} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

let usestyle = makeStyles({
    root: {
        height: "250px",
        maxWidth:"100%",
        backgroundColor: blueGrey[600],
        padding:"3% 0%"
       
        
    },
    link: {
        color: "white",
        textDecoration:"none",
        fontSize: "1rem",
        
    },
    icon: {
        backgroundColor: orange[500],
        borderRadius: "50%",
        padding: 3,
        marginRight:8
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
                        <Link className={classes.link} to="/"><EmailIcon className={classes.icon}/>Nwaforaugustine@gmail.com</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/"className={classes.link}><GitHubIcon className={classes.icon}/>Github</Link>
                    </ListItem>
                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                    <List>
                        <ListItem>
                        <Link to="/"className={classes.link}>About</Link>
                        </ListItem>
                        <ListItem>
                          <Link to="/"className={classes.link}>Contact</Link>
                        </ListItem>
                        <ListItem>
                           <Link to="/"className={classes.link}>Apply Guild</Link>
                        </ListItem>
                        <ListItem>
                         <Link to="/" className={classes.link}>Feature</Link>
                        </ListItem>
                         <ListItem>
                        <Link to="/"className={classes.link}>Num:07031045066</Link>
                    </ListItem>
                    </List>

                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                
                </Grid>
            </Grid>
        </div>
    )
}