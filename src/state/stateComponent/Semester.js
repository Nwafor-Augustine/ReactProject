const semester = []    


/*
Actions for semester
*/

let newSemester = ({id,year,period}) => (
    
    {
        type: "ADD_SEMESTER",
        semester: {
        id,
        period,
        year 
        }
      
    }
)

const semesterReducer = (state = semester, action) => {
    

    switch (action.type) {
    
        case "ADD_SEMESTER":
            
            return [
                ...state,
              {...action.semester}  
            ]
            
        default:

            return state
            
    }
}

export { newSemester, semesterReducer }