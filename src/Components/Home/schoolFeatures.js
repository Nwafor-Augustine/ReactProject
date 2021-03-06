import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import  img0 from '../../images/helena-lopes-UZe35tk5UoA-unsplash.jpg'
import img1 from '../../images/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import img2 from '../../images/jamie-taylor--9C3TMXwQjQ-unsplash.jpg'
import img3 from '../../images/images2.jpeg'
import img4 from '../../images/images7.jpeg'
import img5 from '../../images/images8.jpeg'
import img6 from '../../images/index.jpeg'
let usestyle = makeStyles(theme =>({
   
    
    
    img: {
         
        width: "100%",
        maxWidth:250,
        maxHeight: 200,
        borderRadius:5,
        [theme.breakpoints.down("sm")]: {
          maxWidth: 450,
         maxHeight: 250
        }
        
    },

    gridItem: {
        textAlign: "center",
        "&:hover":{
           opacity:.5
       }
    },

    description: {
        color: green[500],
        padding: "2% 0% 10% 0%",
         [theme.breakpoints.down("sm")]: {
          padding: "2% 0% 4% 0%",
        }
    }
   
       
   

  
}))



export let Features = () => {
    let description = [
        "Change lifestyle of young peoples",
        "Educate to professional level",
        "Library",
        "Industrial courses",
        "Web developer courses ",
        "Electronics traning and maintainance",
        "Solar traning and installation"
    ]
    let classes = usestyle()

    return (
             [img0, img1,img2,img3,img4,img5,img6].map((image,index) => {
    return <Grid item xs={12} sm={12} md={4} lg={3} className={classes.gridItem}  >
        <img src={image} className={classes.img} ></img>
       
          <Typography className={classes.description}>{description[index]}</Typography>
     
            </Grid>
    })
    
    )
        


    
    
}