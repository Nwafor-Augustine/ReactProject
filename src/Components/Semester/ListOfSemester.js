import React from 'react'
import {removeSemester }from '../../state/stateComponent/Semester'

export const ListOfSemester = (props) => (


props.store.semesters.map((semester) => {
        return (
           <div key={semester.id} >
                <table>
                    <thead>
                        <tr>
                        <td>
                             Period
                        </td>
                        
                        <td>
                          Year 
                        </td>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                         <td>
                        {semester.period}
                        </td>
                            <td>
                        {semester.year}
                        </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                    
                           props.store.dispatch(removeSemester(semester.id,props.store.semesters))
                    }
                    }>Remove
                </button>
                <button onClick={() => {
                    console.log(props)
                }}>Edit</button>
           </div>
       ) 
})

)
    
    

