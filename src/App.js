import React from 'react'
import Header from './components/Header'
import Student from './components/Student'
import Home from './components/Home'
import Instructor from './components/Instructor'
import Department from './components/Department'
import Section from './components/Section'
import ErorPage from './components/ErorPage'
import  './state/state'

import {BrowserRouter, Link,  Switch, Route } from 'react-router-dom'



const App = () => {
  
    return (
        <div>
            

    <Header/>
          
            <BrowserRouter >
                 <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/student" component={Student}  />
                    <Route path="/instructor" component={Instructor}/>
                    <Route path="/department" component={Department} />
                    <Route path="/section" component={Section} />
                    <Route  component={ErorPage} />
                 </Switch>
            </BrowserRouter>
       

     </div>
    

 ) 
    
}
 
    




export default App