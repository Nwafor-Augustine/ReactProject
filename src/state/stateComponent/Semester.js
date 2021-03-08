import uuid from "react-uuid"
import {dataBase} from '../../Components/firebase/firebase'

const semesters = []    


//saving semester to firebase and redux

let newSemester = ({id,semesterdetail}) => (
    
    {
        type: "ADD_SEMESTER",
        semester: {
            id,
            ...semesterdetail
      
        }
      
    }
)

let firebaseSavingSemester = (semesterData) => {
    const {
        year,
        period  
    } = semesterData
    
    const semester = { year, period }
    return (dispatch)=>{
        dataBase.ref('Semester').push(semester).then((ref) => {
            dispatch(newSemester({id:ref.key,semester}))
        })
    }
}
    

//removing semester from firebase and redux

let removeSemester = (id, semesters) => (
    
    {
        type:"REMOVE_SEMESTER",
        id,
        semesters
    }
)
    
let firebaseRemovSemester = (id,semester) => {
   
    return (dispatch) => {
        dataBase.ref(`Semester/${id}`).remove().then(() => {
           dispatch(removeSemester(id,semester))
       })
    }
}


const semesterReducer = (state = semesters, action) => {
    

    switch (action.type) {
    
        case "ADD_SEMESTER":
            
            return [
                ...state,
              {...action.semester}  
            ].sort((a,b) => {
              return  a.period - b.period
            })
        
        case "REMOVE_SEMESTER":   
            
       let index = action.semesters.findIndex((semester) => {
                return action.id === semester.id
            })
            action.semesters.splice(index, 1)

        let e =  action.semesters.sort((a,b) => {
              return  a.period - b.period
            })
          
            return [
              ...state
            ]
        default:

            return state
            
    }
}

export { firebaseSavingSemester, semesterReducer,firebaseRemovSemester }