import React from 'react'
import Student from '../Components/Student/studentpage'
import Home from '../Components/Home/home'
import getInstructor from '../Components/Instructor/getInstructor'
import Section from '../Components/Semester/semesterpage'
import ErorPage from '../Components/ErorPage'
import Library from '../Components/Library/librarypage'
import Editpage from '../Components/Instructor/editInstructor'
import DashboradPage from '../Components/dashboard/dashboardpage'
import PrivateRoute from './privateRoute'
import DataDetails from '../Components/showData'
export let history = require("history").createBrowserHistory(History)


import {Router, Link,  Switch, Route } from 'react-router-dom'



const App = () => {
  
    return (
        <div>
        
            <Router history={history} >
          <Switch>
                    
                    <Route path="/" component={Home} exact={true} />
                    <PrivateRoute  path="/dashboard" component={DashboradPage} />
                    <PrivateRoute  path="/student" component={Student} exact={true}/>
                    <PrivateRoute  path="/instructor" component={getInstructor} exact={true}/>
                    <PrivateRoute  path="/section" component={Section} />
                    <PrivateRoute  path="/library" component={Library} />
                    <Route  path="/datas" component={DataDetails} exact={true}/>
                    
                    <Route  path="/show" component={Editpage} exact={true}/>
                    
                    <Route  component={ErorPage} />
                 </Switch>
            </Router>
       

     </div>
    

 ) 
    
}
 
    




export default App