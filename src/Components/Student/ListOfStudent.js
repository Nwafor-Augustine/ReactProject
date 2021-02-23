import React from 'react'
import { removeStudent } from '../../state/stateComponent/Student'
import BasicTable from './showStudent'
import {connect} from 'react-redux'

let ListOfstudent = (props) => (


        props.mapstudent.map((student) => {
            return (
                <div key={student.Id}>
            
                    <BasicTable store={props} student={student}/>
                    
            
            </div>
        )
     })
        
    
)

export default connect((store) => {
    return {
        mapstudent:store.Addstudent
    }
})(ListOfstudent) 



