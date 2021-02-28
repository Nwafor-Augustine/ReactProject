
import { createStore, combineReducers,applyMiddleware } from 'redux'
import{newSemester,semesterReducer}from './stateComponent/Semester'
import{studentReducer,newStudent,removeStudent}from './stateComponent/Student'
import{instructorReducer,newInstructor,removeInstructor}from './stateComponent/Instructor'
import { bookReducer ,addTextBooks, sortTextBooks,editTextBooks} from './stateComponent/Library'
import { filterStudent, filterByReducer } from './stateComponent/Filterstudent'
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

        
firebase.auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('login')
    } else {
        console.log('logout')
    }
})
  


store.subscribe(() => {
     console.log(store.getState())
 })






