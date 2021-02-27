import React from 'react'
import BasicTable from './basicTableForEachSemester'
import {connect} from 'react-redux'





let ListOfsemester = (props) => (


    props.mapsemester.map((semester) => {
     console.log(props.semester)
        return (
            <div key={semester.id}>
               <BasicTable store={props} semester={semester}/> 
              
            </div>
        )
    })

)

export default connect((store) => {
    return{
        mapsemester:store.Semester
    }
})(ListOfsemester)



