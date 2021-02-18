import uuid from "react-uuid"

// instructor data management
const instructors = [{
    serialNumber: uuid(),
    Name: "Austine",
    Department: "Electrical",
    Salary:"$50000"
}
]


let newInstructor = ({Name,Department,Salary}) => (
    
    {
        type: "NEW_INSTRUCTOR", 
        instructor: {
        serialNumber:uuid(),
        Name,
        Department,
        Salary
        }
      
}

)


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

export{instructorReducer,newInstructor,removeInstructor}