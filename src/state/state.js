
import { createStore, combineReducers } from 'redux'
import{newSemester,semesterReducer}from './stateComponent/Semester'
import{studentReducer,newStudent,removeStudent}from './stateComponent/Student'
import{instructorReducer,newInstructor,removeInstructor}from './stateComponent/Instructor'
import{filterTextbookReducer}from './stateComponent/Filter'
import { bookReducer ,addTextBooks, sortTextBooks,editTextBooks} from './stateComponent/Library'
import {filterStudent,filterByReducer} from'./stateComponent/Filterstudent'


export let store = createStore(
    combineReducers(

    {
    SemesterReducer: semesterReducer,
    Addstudent: studentReducer,
    Addinstructor: instructorReducer,
    GetTextbook: filterTextbookReducer,
    AddBook: bookReducer,
    Filter:filterByReducer

        }
        
    ))

        

  

// store.subscribe(() => {

 
//     console.log(store.getState())
// });
store.dispatch(newSemester({ id: "9", period: "5", year: "2021" }))
store.dispatch(newSemester({ id: "9", period: "5", year: "2021" }))


// store.dispatch(newStudent({ Id: 6, Name: "austine", Department: "electrical", Credit: 5 }))
// store.dispatch(newStudent({ Id: 6, Name: "austine", Department: "electrical", Credit: 5 }))
// store.dispatch(newStudent({ Id: 5, Name: "jane", Department: "mech", Credit: 5 }))
// store.dispatch(newStudent({ Id: 5, Name: "woo", Department: "mech", Credit: 5 }))
// store.dispatch(filterStudent({Name:"",Id:5,Department:"electrical",Type:"Department"}))
store.dispatch(newInstructor({ serialNumber: 1, Name: "mike", DepartmentalName: "computer", Salary: "2000" }))
// store.dispatch(newInstructor({ serialNumber: 1, Name: "jude", DepartmentalName: "computer", Salary: "2000" }))
// store.dispatch(addTextBooks({ ISBN: 12234, Name: "kerry", Id: 2, Author: "austine",Time:2009 }))
// store.dispatch(addTextBooks({ ISBN: 12234, Name: "dddd", Id: 2, Author: "austine",Time:2003 }))
// let state = store.getState()
// let student = state.Addstudent;
// let filter = state.Filter
// let Instructor = state.Addinstructor
// let textBooks = state.AddBook;
// store.dispatch(editTextBooks("dddd",textBooks,{ISBN:500, Name:"micheal",Id:"",Author:"alex",Time:2000}))
// store.dispatch(sortTextBooks({sortType:"Date",textBooks}))
// store.dispatch(removeStudent(filter,student))

  console.log(store.getState())






