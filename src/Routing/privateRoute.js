import React from 'react'
import {Route,Redirect}  from 'react-router'
import { connect } from 'react-redux'
import Header from '../Components/header/Header'



let PrivateRoute = (
    {
        userStatusCheck,
        component:Component,
        ...rest
    }
    ) => {
    
    return <Route {...rest} component={(props) => (
        userStatusCheck ? (<div><Header/><Component {...props}/></div>) :(<Redirect to={"/"}/>)
    )}/>

}  
export default connect((store) => (
    {
        userStatusCheck:store.userStatus
    }
))(PrivateRoute)
