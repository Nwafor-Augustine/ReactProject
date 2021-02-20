import React from 'react'
import{removeStudent}from '../../state/stateComponent/Student'
export let ListOfStudent = (props) => (


        props.store.students.map((student) => {
            return (
                <div key={student.Id}>
            
                <table>
                    <thead>
                            <tr>
                                <td>
                                Name
                            </td>
                             <td>
                                Department
                            </td>
                             <td>
                                Creadit
                            </td>
                    
                            </tr>
                            
                    </thead>
                    <tbody>
                        <tr>
                                <td> {student.Name}</td>
                                <td> {student.Department}</td>
                                <td> {student.Credit}</td>
                        </tr>
                    </tbody>
                
                </table>
                    <button 
                    onClick={
                           () => {
                        
                               props.store.dispatch(removeStudent(props.store.Filter, student.Id, props.store.students))                          
                           
                                  }
                         }>Remove
                     </button>
            
            </div>
        )
     })
        
    
)

