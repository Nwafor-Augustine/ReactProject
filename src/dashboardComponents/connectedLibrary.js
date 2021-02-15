import React from 'react'
import { connect } from 'react-redux'
import Fragment from 'react-dom'
import { ListofBooks } from '../component/listBooks'
import { bookReducer, addTextBooks, sortTextBooks, editTextBooks } from '../state/stateComponent/Library'
import moment from 'moment'
import {store} from '../state/state'




class Lib extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            Name: "",
            Author: "",
            ISBN: "",
            Time:moment().valueOf()
        
        }
        this.nameChangeUpdate = this.nameChangeUpdate.bind(this)
        this.isbnChangeUpdate = this.isbnChangeUpdate.bind(this)
        this.authorChangeUpdate = this.authorChangeUpdate.bind(this)
        this.addTextBook = this.addTextBook.bind(this)

    };

    nameChangeUpdate(e){
      
        this.setState(() => (
            {
             Name:e.target.value
         }
     ))
    
     }

    authorChangeUpdate(e){
      
        this.setState(() => (
            {
             Author:e.target.value
         }
     ))
    
    }
    
    isbnChangeUpdate(e){
      
        this.setState(() => (
            {
             ISBN:e.target.value
         }
     ))
  
        
    }

    addTextBook(e) {

        if (this.state.Name && this.state.Author && this.state.ISBN) {
              
            this.props.dispatch(addTextBooks(this.state))
            this.state.Name = ""
            this.state.Author = ""
            this.state.ISBN = ""
              console.log(this.state)
       }
       
    }
    
    render() {

        return (
            <div>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="type" id="name" onChange={this.nameChangeUpdate} placeholder="NAME"></input>
                </div>
                <div>
                    <label htmlFor="name">Author:</label>
                    <input type="type" id="name" onChange={this.authorChangeUpdate} placeholder="AUTHOR" ></input>
                </div>
                <div>
                    <label htmlFor="name">ISBN:</label>
                    <input type="type" id="name" onChange={this.isbnChangeUpdate} placeholder="ISBN" ></input>
                </div>
                <div>


                    <ListofBooks books={this.props.library} />


                    <button type="button" onClick={this.addTextBook} state={this.state}>Add</button>
                </div>


            </div>
        )

    }

}



let connectedLibrary = connect((state) => (
    {
        library: state.AddBook
    }
)
)(Lib)

export default connectedLibrary;