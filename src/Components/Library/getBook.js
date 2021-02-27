import React from 'react'
import { connect } from 'react-redux'
import { ListOfBooks } from './ListBooks'
import { addTextBooks } from '../../state/stateComponent/Library'
import { TextField, Container, Button, Box, Typography,ThemeProvider,createMuiTheme,Divider } from '@material-ui/core'
import { green,blue } from '@material-ui/core/colors';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeloadingScreen from '../alertModal'
import AddIcon from '@material-ui/icons/Add';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
            textcolor:"white"
            
        },
        secondary:{
          main:blue[800]
        }
    }
})
class Libraries extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            Name: "",
            Author: "",
            ISBN: "",
            action:false
        
        }
        this.nameChangeUpdate = this.nameChangeUpdate.bind(this)
        this.isbnChangeUpdate = this.isbnChangeUpdate.bind(this)
        this.authorChangeUpdate = this.authorChangeUpdate.bind(this)
        this.addTextBook = this.addTextBook.bind(this)
        this.closeModalComfirm = this.closeModalComfirm.bind(this)
        this.closeModalCancel = this.closeModalCancel.bind(this)
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

    addTextBook() {

     
           
     this.setState(() => (
            {
                 action: true,
            }
        ) 
            
     )
        
        
         
      
    }
   
closeModalComfirm() {
        this.setState(() => (
            {
                action: false,
               
                
            }
        ))

             if (this.state.Name && this.state.Author && this.state.ISBN) {
              
            this.props.dispatch(addTextBooks(this.state))
            this.state.Name = ""
            this.state.Author = ""
            this.state.ISBN = ""
              
        } 
             
        
    }


 closeModalCancel() {
        this.setState(() => (
            {
                action: false,
               
                
            }
        ))
    
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
              <Container>

                          
                 <Box textAlign={"right"}  height={40}  mt={10}  mb={5} color="green"  >
                        <Typography variant={'body1'} >
                         BOOK
                        </Typography>
                    <Divider></Divider>
                </Box>
                
                <label>
                    Name:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                        onChange={this.nameChangeUpdate} 
                    />
                </label>
               
                   
               <label>
                    Author:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="Author" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                         onChange={this.authorChangeUpdate} 
                    />
             </label>
               
               
                 
                     <label>
                    ISBN:
                     <TextField style={{ margin: 8 }}  type="text"placeholder="ISBN" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                          onChange={this.isbnChangeUpdate} 
                    />
                </label>
                
              
                   <HomeloadingScreen openModal={this.state.action} closeModalComfirm={this.closeModalComfirm} closeModalCancel={this.closeModalCancel} title={"Book"} message={"Comfirm the book to be add as part of the list"}/>

                    
                    <Box my={5}>
                        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={this.addTextBook}>Add Book
                     </Button>
                    </Box>
                    

               


            </Container>
            </ThemeProvider>
          
        )

    }

}



let connectedLibrary = connect(undefined)(Libraries)

export default connectedLibrary;