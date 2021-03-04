
export let logInState = (userId) => (
    {
        type: "LOGIN_STATE",
        userId: {
            userId
        }
        
    }
)


export let logOutState = () => (
    {
        type: "LOGOUT_STATE",
        
        
    }
)




export let userStatusReducer = (state = {}, action) => {
    
    switch (action.type) {

        case "LOGIN_STATE":
            
            return {
                ...action.userId
            }
        
         case "LOGOUT_STATE":
            
            return {
            
            }
            
        default:
            return {
                state
            }
  }
}