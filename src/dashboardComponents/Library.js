import React from 'react'
import Libraries  from './connectedLibrary'
import Fragment from 'react-dom'
import {Container} from 'react-bootstrap'


export default class Library extends React.Component{

    render() {
        
        return (
                <Container fluid={true}>
                 <React.Fragment>
                    <h1>Library</h1>
                     </React.Fragment>
   
                  <Libraries />
                
           
                </Container>
              
    )
    }

}