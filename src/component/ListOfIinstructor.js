import React from 'react'
import {removeInstructor} from '../state/stateComponent/Instructor'

export let Instructor = (props) => (
    
    props.Instructors.map((instructor) => {
        return (
            <div key={instructor.serialNumber}>
                <table>
                    
                    <thead>
                        <tr>
                        <td>Name</td>
                        <td>Departmental-Name</td>
                        <td>Salary</td>
                        </tr>
                        

                    </thead>

                    <tbody>
                        <tr>
                              <td>
                        {instructor.Name}
                        </td>
                         <td>
                        {instructor.Department}
                        </td>
                         <td>
                        {instructor.Salary}
                        </td>
                        </tr>
                      
                    </tbody>
                </table>
                <React.Fragment>
                    <button onClick={
                        () => {
                            props.store.dispatch(removeInstructor(instructor.serialNumber, props.store.Instructors))
                            
                            
                        }
                    }>Remove Instructor
                         
                    </button>
                    <button>Edit</button>
                </React.Fragment>
            </div>
        )
    })


)