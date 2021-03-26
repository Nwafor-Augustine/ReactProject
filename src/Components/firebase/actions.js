import firebase,{provider,dataBase} from './firebase'
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


export const loadAndFetchingDataOnVisit = () => {
    return () => {
        return dataBase.ref("Student").once('value').then((snapshot) => {
      let students = []
    snapshot.forEach((childsnapshot) => {
        students.push(childsnapshot.val())
        console.log(students)
      })
      
    })
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

