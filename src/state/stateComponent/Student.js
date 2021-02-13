//student data management
const student = []

const newStudent=({Id,Name,Department,Credit})=>(

    {
        type: "NEW_STUDENT",
        student: {
            Name,
            Id,
            Department,
            Credit
        }
      
    }

)



const removeStudent = (filter, student) => {
   
    let sortStudent = student.filter((students) => {
       
       if (students.Name === filter) {
           return false

       } else if(students.Id === filter){
            return false
       }else if(students.Department === filter){
            return false
       } else {
           return true
       }

    })
    return {
        type:"REMOVE_STUDENT",
        student:{
          ...sortStudent 
        }
    }
}
   


   




const studentReducer = (state = student, action) => {
    

    switch (action.type) {
     
        case "NEW_STUDENT":

            return [...state,{...action.student}]
        
        case "REMOVE_STUDENT":
            return {
      ...action.student
  }
        
        default:
            return state
        
            
    }
}


export{studentReducer,newStudent,removeStudent}