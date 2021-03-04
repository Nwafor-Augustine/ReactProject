


import React from 'react'
import ReactDom from 'react-dom'
import App from './Routing/App'
import {Provider} from 'react-redux'
import { store } from './state/Store'
import firebase from './Components/firebase/firebase'
import './styles/style.css'
import { history } from './Routing/App'
import {logInState,logOutState} from './state/stateComponent/firebaseState'



let rootApp = <Provider store={store}><App /></Provider> 
let checkRendered = false

let renderApp = () => {
  if (!checkRendered) {
    return ReactDom.render(rootApp, document.getElementById("root"));
     checkRendered = true
  } 

}






firebase.auth().onAuthStateChanged(function (user) {
 
  if (user) {
     
      renderApp()
      if (history.location.pathname === "/") {
        history.push("/dashboard")
        store.dispatch(logInState(user.uid))
      }
  
  } else {
       
      renderApp()
      history.push("/")
      store.dispatch(logOutState())
     
      
  }
    
})
