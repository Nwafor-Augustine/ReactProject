
import React from 'react'
import { CssBaseline,makeStyles} from '@material-ui/core'
import {Footer} from './footer'
import  ResponsiveDialog from './homeloading'
import Main from './main'



let Home = () => {
    
    
       

        return (
            <div >
                
                <CssBaseline />
                <ResponsiveDialog />
                <Main/>
                <Footer />
 
            </div>

            
              
          
        )
    
}

export default Home