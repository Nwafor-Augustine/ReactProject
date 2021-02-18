import React from 'react'
import { connect } from 'react-redux'
import { ListOfBooks } from '../component/ListBooks'
import {addTextBooks} from '../state/stateComponent/Library'


class Libraries extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            Name: "",
            Author: "",
            ISBN: "",
            
        
        }
        this.nameChangeUpdate = this.nameChangeUpdate.bind(this)
        this.isbnChangeUpdate = this.isbnChangeUpdate.bind(this)
        this.authorChangeUpdate = this.authorChangeUpdate.bind(this)
        this.addTextBook = this.addTextBook.bind(this)
       

    };

    

    nameChangeUpdate(e) {
      
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
              
        }
         
      
    }
   
    render() {

        return (
            <div>

             
                    <label htmlFor="name">Name:  <input type="type" id="name" onChange={this.nameChangeUpdate} placeholder="NAME"></input></label>
                  
               
               
                    <label htmlFor="name">Author: <input type="type" id="name" onChange={this.authorChangeUpdate} placeholder="AUTHOR" ></input></label>
                   
               
               
                    <label htmlFor="name">ISBN: <input type="type" id="name" onChange={this.isbnChangeUpdate} placeholder="ISBN" ></input>
               </label>
                   
                <React.Fragment>


                    <ListOfBooks books={this.props.library} store={this.props} />


                    <button type="button" onClick={this.addTextBook} state={this.state}>Add Book</button>
                </React.Fragment>


            </div>
        )

    }

}



let connectedLibrary = connect((state) => (
    {
        library: state.AddBook
    }
)
)(Libraries)

export default connectedLibrary;