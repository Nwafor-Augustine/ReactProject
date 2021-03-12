import firebase,{provider} from './firebase'
import Instructors from '../Instructor/ListOfIinstructor'
import ListOfstudent from '../Student/ListOfStudent'
import React from 'react'
let renderCheck = false

export let startLoginAccount = () => {
    return () => {
       return firebase.auth().signInWithPopup(provider)
    }
}

export let startLogoutAccount = () => {
    return () => {
        return firebase.auth().signOut()
    }
}


export const dataInstructorDatasFromFirebase = () => {
    renderCheck = true

    if (renderCheck) {
        renderCheck = false
        return (<Instructors />)
        
    } else {

        return undefined

    }

  
}


export const dataStudentDatasFromFirebase = () => {
    renderCheck = true
    if (renderCheck) {
        renderCheck = false
        return (<ListOfstudent />)
        
    } else {

        return undefined
        
    }

  
}

