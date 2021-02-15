import React from 'react'
import Lib from './connectedLibrary'
import Fragment from 'react-dom'


export default class Library extends React.Component{

    render() {
        
        return (

               <React.Fragment>
               <h1>Library</h1>
   
                <Lib />
                
            </React.Fragment>
    )
    }

}