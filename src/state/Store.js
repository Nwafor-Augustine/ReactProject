
import { createStore, combineReducers,applyMiddleware,compose } from 'redux'
import{semesterReducer}from './stateComponent/Semester'
import{studentReducer}from './stateComponent/Student'
import{instructorReducer}from './stateComponent/Instructor'
import { bookReducer } from './stateComponent/Library'
import { filterByReducer } from './stateComponent/Filterstudent'
import thunk from 'redux-thunk'
import {userStatusReducer} from './stateComponent/firebaseState'
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
    combineReducers(

    {
    Semester: semesterReducer,
    Addstudent: studentReducer,
    Addinstructor: instructorReducer,
    AddBook: bookReducer,
    Filter: filterByReducer,
    userStatus:userStatusReducer

        }
        
    ),
    composeEnhancers(applyMiddleware(thunk))
    

)





store.subscribe(() => {
     console.log(store.getState())
})







