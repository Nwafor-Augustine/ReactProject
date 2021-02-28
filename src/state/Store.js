
import { createStore, combineReducers,applyMiddleware } from 'redux'
import{newSemester,semesterReducer}from './stateComponent/Semester'
import{studentReducer,newStudent,removeStudent}from './stateComponent/Student'
import{instructorReducer,newInstructor,removeInstructor}from './stateComponent/Instructor'
import { bookReducer ,addTextBooks, sortTextBooks,editTextBooks} from './stateComponent/Library'
import { filterStudent, filterByReducer } from './stateComponent/Filterstudent'
// import  * as firebase from 'firebase';

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

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(' User is signed in.')
//   } else {
//     console.log(' User is signed out.')
//   }
// });



// store.subscribe(() => {
//      console.log(store.getState())
//  })






