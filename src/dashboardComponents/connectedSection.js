import React from 'react'
import { connect } from 'react-redux'


let Semester = (props) => {

    return (
        <div>
    <h3>{props.semester.length}</h3>
        </div>
    )
    
}


 let sections = connect((state) => {
    return {
        semester:state.SemesterReducer
    }
 })(Semester)
export default sections