import React from 'react'
import { connect } from 'react-redux'
import { ListOfBooks } from './ListBooks'
import { addTextBooks } from '../../state/stateComponent/Library'
import { TextField, Container, Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';


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
            <Container>

                  
                <label>
                    Name:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="secondary"
                        onChange={this.nameChangeUpdate} 
                    />
             </label>
               
                   
               <label>
                    Author:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="secondary"
                         onChange={this.authorChangeUpdate} 
                    />
             </label>
               
               
                 
                     <label>
                    ISBN:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="secondary"
                          onChange={this.isbnChangeUpdate} 
                    />
                </label>
                
                <React.Fragment>


                    <ListOfBooks books={this.props.library} store={this.props} />
                    
                     <Button variant="contained" color="primary"  state={this.state} startIcon={<AddIcon/>} onClick={this.addTextBook}>Add Book</Button>

               
                </React.Fragment>


            </Container>
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