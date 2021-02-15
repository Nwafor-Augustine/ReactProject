import React from 'react'
import Header from './dashboardComponents/Header'
import Student from './dashboardComponents/Student'
import Home from './dashboardComponents/Home'
import Instructor from './dashboardComponents/Instructor'
import Section from './dashboardComponents/Section'
import ErorPage from './dashboardComponents/ErorPage'
import Library from './dashboardComponents/Library'
import  './state/state'

import {BrowserRouter, Link,  Switch, Route } from 'react-router-dom'



const App = () => {
  
    return (
        <div>
            

    <Header/>
          
            <BrowserRouter >
                 <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/student" component={Student} />
                    <Route path="/instructor" component={Instructor}/>
                    <Route path="/section" component={Section} />
                     <Route path="/library" component={Library} />
                    <Route  component={ErorPage} />
                 </Switch>
            </BrowserRouter>
       

     </div>
    

 ) 
    
}
 
    




export default App