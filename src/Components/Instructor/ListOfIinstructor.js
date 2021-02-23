import React from 'react'
import BasicTable from './showList'
import { connect } from 'react-redux'

let Instructors = (props) => (

    props.mapinstructor.map((instructor) => {
    
        return (
   
            <React.Fragment key={instructor.serialNumber}>
 
                <BasicTable instructor={instructor} store={props}></BasicTable>


            </React.Fragment>

        )
    })


)




export default connect((state) => {
    return {
       mapinstructor: state.Addinstructor
    }
})(Instructors)