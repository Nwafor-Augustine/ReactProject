
import { createStore, combineReducers } from 'redux'
import{newSemester,semesterReducer}from './stateComponent/Semester'
import{studentReducer,newStudent,removeStudent}from './stateComponent/Student'
import{instructorReducer,newInstructor,removeInstructor}from './stateComponent/Instructor'
import { bookReducer ,addTextBooks, sortTextBooks,editTextBooks} from './stateComponent/Library'
import { filterStudent, filterByReducer } from './stateComponent/Filterstudent'
import moment from 'moment'
import Moment from 'react-moment';


export let store = createStore(
    combineReducers(

    {
    SemesterReducer: semesterReducer,
    Addstudent: studentReducer,
    Addinstructor: instructorReducer,
    AddBook: bookReducer,
    Filter:filterByReducer

        }
        
    ))

        

  

// store.subscribe(() => {

 
//     console.log(store.getState())
// });
// store.dispatch(newSemester({ id: "9", period: "5", year: moment().valueOf()}))
// store.dispatch(newSemester({ id: "9", period: "5", year: "2021" }))



store.dispatch(newStudent({ Id: 6, Name: "gustine", Department: "electrical1", Credit: 5 }))
store.dispatch(newStudent({ Id: 2, Name: "austine", Department: "electrical2", Credit: 5 }))
store.dispatch(newStudent({ Id: 8, Name: "fustine", Department: "electrical3", Credit: 5 }))
store.dispatch(newStudent({ Id: 9, Name: "bustine", Department: "electrical4", Credit: 5 }))

// // store.dispatch(filterStudent({Name:"",Id:5,Department:"electrical",Type:"Department"}))



// let state = store.getState()
// let student = state.Addstudent;
// let filter = state.Filter
// let Instructor = state.Addinstructor
// let textBooks = state.AddBook;
// store.dispatch(editTextBooks("dddd",textBooks,{ISBN:500, Name:"micheal",Id:"",Author:"alex",Time:2000}))
// store.dispatch(sortTextBooks({sortType:"Date",textBooks}))


store.subscribe(() => {
     console.log(store.getState())
 })






