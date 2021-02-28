import React from 'react'
import {makeStyles} from '@material-ui/core'



let usestyle = makeStyles({
    root: {
        height: "250px",
        backgroundColor:"black",
        opacity: .7,
        
    }
    
  
})

export const Footer = () => {
   let classes = usestyle()
    return (
        <div className={classes.root}>
        
        </div>
    )
}