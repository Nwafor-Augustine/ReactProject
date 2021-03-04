// import React from 'react'
// import {Route,Redirect}  from 'react-router'
// import { connect } from 'react-redux'




// let PublicRoute = (
//     {
//         userStatusCheck,
//         component:Component,
//         ...rest
//     }
//     ) => {
    
//     return <Route {...rest} component={(props) => (
//         !!userStatusCheck ? (
//             <div>
              
//                 <Component {...props} />
//             </div>
//         ) : (<Redirect to={"/"} />)
//     )}/>

// }  
// export default connect((store) => (
//     {
//         userStatusCheck:store.userStatus
//     }
// ))(PublicRoute)
