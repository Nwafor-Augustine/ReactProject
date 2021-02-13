// instructor data management
const instructors = [{
    serialNumber: "0",
    Name: "Austine",
    DepartmentalName: "Electrical",
    Salary:"$50000"
}
]


let newInstructor = ({serialNumber,Name,DepartmentalName,Salary}) => (
    
    {
        type: "NEW_INSTRUCTOR", 
        instructor: {
        serialNumber,
        Name,
        DepartmentalName,
        Salary
        }
      
}

)


let removeInstructor = (Name, instructor) => {
     
    let sortInstructor = instructor.filter((instructors) => {
       return instructors.Name === Name ? false:true
        
    })
  
    return  {
        type: "REMOVE_INSTRUCTOR", 
        Name,
        instructor:{
        sortInstructor 
        }

      
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
                

            return {
                
                   ...action.instructor
                }
            

        default:

            return state
        
            
    }
}

export{instructorReducer,newInstructor,removeInstructor}