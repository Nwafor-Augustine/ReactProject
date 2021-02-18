

import React from 'react'
import Students from './connectedStudent'
import Fragment from 'react-dom'





export default class Student extends React.Component{
    
    render() {
        return (
            <div>
                <React.Fragment>
                    <h1>
                    Students
                    </h1>
                </React.Fragment>
               
             
                <Students /> 
            </div>

            
              
          
        )
    }
}
