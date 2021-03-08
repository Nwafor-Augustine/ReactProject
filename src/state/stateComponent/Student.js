import uuid from "react-uuid"
import moment from 'moment'
import {dataBase, DataBase} from '../../Components/firebase/firebase'

const student = []

// saving data in firebase and redux

const newStudent=(studentDetail)=>(

    {
        type: "NEW_STUDENT",
        student: {
            ...studentDetail,
            Time:moment().valueOf()
        }
      
    }

)

let firebaseSaveStudent = (studentData) => {
    const {
        Name,
        Department,
        Credit
    } = studentData
    
    const student = { Name, Department, Credit }
    
    return (dispatch) => {

        dataBase.ref('Student').push(student).then((ref) => {
            dispatch(newStudent({Id:ref.key,...student}))
        })
    }
}

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


export{studentReducer,firebaseSaveStudent,removeStudent}