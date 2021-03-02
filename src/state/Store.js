
import { createStore, combineReducers,applyMiddleware } from 'redux'
import{semesterReducer}from './stateComponent/Semester'
import{studentReducer}from './stateComponent/Student'
import{instructorReducer}from './stateComponent/Instructor'
import { bookReducer } from './stateComponent/Library'
import { filterByReducer } from './stateComponent/Filterstudent'
import firebase from '../Components/firebase/firebase'


import thunk from 'redux-thunk'


export let store = createStore(
    combineReducers(

    {
    Semester: semesterReducer,
    Addstudent: studentReducer,
    Addinstructor: instructorReducer,
    AddBook: bookReducer,
    Filter:filterByReducer

        }
        
    ),
    applyMiddleware(thunk)

)

let user1 =  firebase.auth().currentUser

firebase.auth().onAuthStateChanged(function (user) {
 
    if (user) {
       console.log(user)
  
  } else {
   
      console.log("sign out",user)
  }
    
})










