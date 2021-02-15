import React from 'react'
import {connect} from 'react-redux'

let Students = ({students}) => (
    
    <div>
        <h1>Student</h1>
        {students.length}
    </div>

)

let connectedStudent = connect((state) => (
    {
       students:state.Addstudent
    }
))(Students)

export default connectedStudent;