import { connect } from 'react-redux'
import React from 'react'

let Instructors = (props) => (
    <div>
        <h1>Instructor</h1>
        {props.Instructor.length}
    </div>
)


let connectedInstructor = connect((state) => {
    return {
        Instructor:state. Addinstructor
    }
})(Instructors)

export default connectedInstructor