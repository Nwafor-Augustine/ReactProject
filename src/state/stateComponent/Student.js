import uuid from "react-uuid"
import moment from 'moment'

//student data management
const student = []

const newStudent=({Name,Department,Credit})=>(

    {
        type: "NEW_STUDENT",
        student: {
            Name,
            Id:uuid(),
            Department,
            Credit,
            Time:moment().valueOf()
        }
      
    }

)



const removeStudent = (id,students) => {

 
    return {
        type: "REMOVE_STUDENT",
        students,
        id
      
    }
}
   


   




const studentReducer = (state = student, action) => {
    

    switch (action.type) {
     
        case "NEW_STUDENT":
       
            return [
                     ...state, { ...action.student }
            
            
                    ].sort((a, b) => {
                   
                               return b.Name < a.Name 
                      })
        
        case "REMOVE_STUDENT":
             
            let index = action.students.findIndex((student) => {
        return action.id === student.Id 
    })
            
            action.students.splice(index, 1)
            action.students.sort((a, b) => {
                   
                return b.Name < a.Name 
            })

           
            return [
              ...state
            ]
     
  
        
        default:
            return state
        
            
    }
}


export{studentReducer,newStudent,removeStudent}