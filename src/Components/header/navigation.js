import { Link, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'


export let Nav = () => (
    
        <Router >
                       <Link  to="/">Home</Link>
                        <Link  to="/student">Student</Link>
                        <Link  to="/instructor">Instructor</Link>
                        <Link to="/section">Section</Link>
                        <Link to="/library">Library</Link> 
        </Router>
                      
    
)