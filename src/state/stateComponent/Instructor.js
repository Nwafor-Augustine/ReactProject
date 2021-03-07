import uuid from "react-uuid"
import {dataBase } from '../../Components/firebase/firebase'


const instructors = [{
    serialNumber: uuid(),
    Name: "Austine",
    Department: "Electrical",
    Salary:"$50000"
}
]

// save instructor in firebase and redux
let newInstructor = (instructorDetail) => (
    
    {
        type: "NEW_INSTRUCTOR", 

        instructor: {
        ...instructorDetail
        }
      
}

)

let firebaseSaveInstructor = (instructorData) => {
    const {
        Name,
        Department,
        Salary
    } = instructorData

    let instructor = { Name, Department, Salary }
    
    return (dispatch) => {

        dataBase.ref('Instructor').push(instructor).then((ref) => {
            dispatch(newInstructor(
                {
                    serialNumber: ref.key,
                    ...instructor
                }
            ))
        })
    }
}


let removeInstructor = (serialNumber,instructors) => {
     
    return  {
        type: "REMOVE_INSTRUCTOR", 
        instructors,
        serialNumber
   }
}

   

  
 

const instructorReducer = (state=instructors, action) => {
    

    switch (action.type) {
       
        case "NEW_INSTRUCTOR":
            
            return [
                  ...state,  
                {
                ...action.instructor
                }
            ]
        case "REMOVE_INSTRUCTOR":
                
        let index = action.instructors.findIndex((instructor) => {
        
            return instructor.serialNumber === action.serialNumber
        })
            
            action.instructors.splice(index, 1)
            
            return [
                
                ...state
                
                
            ] 
            

        default:

            return state
        
            
    }
}

export{instructorReducer,firebaseSaveInstructor ,removeInstructor}