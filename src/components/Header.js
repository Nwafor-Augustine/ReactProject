
import {Link,BrowserRouter as Router} from 'react-router-dom'
import React from 'react'





export default  class Header extends React.Component{
    render() {
        return (
            <div>
                
                <div>
                    
                    <Router>
                        <Link to="/">Home</Link>
                        <Link to="/student">Student</Link>
                        <Link to="/instructor">Instructor</Link>
                        <Link to="/department">Department</Link>
                        <Link to="/section">Section</Link>
                        
                    </Router>
                       
                </div>
  
            </div>
              
              
          
        )
    }
}
