
import React from 'react'
import { CssBaseline,makeStyles} from '@material-ui/core'
import {Footer} from './footer'
import  ResponsiveDialog from './homeloading'
import {Main} from './main'


let usestyle = makeStyles({
    root: {
        marginTop:"10vh"
    }
    
  
})



let Home = () => {
    
    
        let classes = usestyle()

        return (
            <main className={classes.root}>
                
                <CssBaseline />
                <ResponsiveDialog />
                <Main/>
                <Footer />
 
            </main>

            
              
          
        )
    
}

export default Home