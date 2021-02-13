 //student


const filter = {
    Name: "Name",
    id: "",
    department: "",
    type:""
}

//Actions

let filterStudent = ({Name,Id,Department,Type}) => (
    {
      type:"FILTER",
        name: {
            Name,
            Department,
            Type,
            Id
      }
    }
)

const filterByReducer = (state=filter, action) => {
    

    switch (action.type) {
      
        case "FILTER":

            if (action.name.Type === "Name" && action.name.Name) {
                return action.name.Name
                   
                
          
            } else if (action.name.Type ==="Id" && action.name.Id) {
                
                   return action.name.Id
            } else if (action.name.Type ==="Department" && action.name.Department) {
                   return action.name.Department
            } else {
                return filter
      }
       

        default:

            return filter
        
            
    }
}


export{filterStudent,filterByReducer}