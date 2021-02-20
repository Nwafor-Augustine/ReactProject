import React from 'react'
import BasicTable from './showList'

export let Instructor = (props) => (
    
    props.Instructors.map((instructor) => {
        return (
         
                <React.Fragment key={instructor.serialNumber}>
                   
                   <BasicTable instructor={instructor} storeAction={props}></BasicTable>
                </React.Fragment>
            
        )
    })


)