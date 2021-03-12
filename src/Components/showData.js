import React from 'react'
import {dataInstructorDatasFromFirebase} from '../Components/firebase/actions'
import {dataStudentDatasFromFirebase} from '../Components/firebase/actions'

let DataDetails = () => {
const Instructor = dataInstructorDatasFromFirebase()
const Student =  dataStudentDatasFromFirebase()
    return (
        <React.Fragment>
            {Instructor}
            {Student}
        </React.Fragment>
    )
}
export default DataDetails