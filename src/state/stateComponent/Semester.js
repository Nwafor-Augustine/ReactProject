import uuid from "react-uuid"

const semester = []    


/*
Actions for semester
*/

let newSemester = ({year,period}) => (
    
    {
        type: "ADD_SEMESTER",
        semester: {
        id:uuid(),
        period,
        year 
        }
      
    }
)

let removeSemester = (id, semesters) => (
    
    {
        type:"REMOVE_SEMESTER",
        id,
        semesters
    }
)
    



const semesterReducer = (state = semester, action) => {
    

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

export { newSemester, semesterReducer,removeSemester }