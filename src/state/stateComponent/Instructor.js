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

        dataBase.ref('Instructors').push(instructor).then((ref) => {
            dispatch(newInstructor(
                {
                    serialNumber: ref.key,
                    ...instructor
                }
            ))
        })
    }
}

//removing instructor from firebase and redux

let removeInstructor = (serialNumber,instructors) => {
     
    return  {
        type: "REMOVE_INSTRUCTOR", 
        instructors,
        serialNumber
   }
}


let firebaseRemoveInstructor = (serialNumber,instructors) => {
console.log("going")
    return (dispatch) => {
        dataBase.ref(`Instructors/${serialNumber}`).remove().then(() => {
            dispatch(removeInstructor(serialNumber,instructors))
        })
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

export{instructorReducer,firebaseSaveInstructor ,firebaseRemoveInstructor}