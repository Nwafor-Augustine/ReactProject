import React from 'react'
import Student from '../Components/Student/studentpage'
import Home from '../Components/Home/home'
import getInstructor from '../Components/Instructor/getInstructor'
import Section from '../Components/Semester/semesterpage'
import ErorPage from '../Components/ErorPage'
import Library from '../Components/Library/librarypage'
import Editpage from '../Components/Instructor/editInstructor'
import DashboradPage from '../Components/dashboard/dashboardpage'
import Header from '../Components/header/Header'
import '../state/Store'


import {BrowserRouter, Link,  Switch, Route } from 'react-router-dom'



const App = () => {
  
    return (
        <div>
          <Header/>
            <BrowserRouter >
          <Switch>
                    <Route path="/dashboard" component={DashboradPage} exact={true}/>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/student" component={Student} exact={true}/>
                    <Route path="/instructor" component={getInstructor} exact={true}/>
                    <Route path="/section" component={Section} />
                    <Route path="/library" component={Library} />
                   
                    <Route path="/show" component={Editpage} exact={true}/>
                    
                    <Route  component={ErorPage} />
                 </Switch>
            </BrowserRouter>
       

     </div>
    

 ) 
    
}
 
    




export default App