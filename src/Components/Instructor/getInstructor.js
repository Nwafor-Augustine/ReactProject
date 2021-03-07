
import React from 'react'
import {firebaseSaveInstructor } from '../../state/stateComponent/Instructor'
import { Button, Container, TextField, Avatar, Box, Typography,ThemeProvider,createMuiTheme,Divider } from '@material-ui/core';
import { green,blue,grey} from '@material-ui/core/colors';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeloadingScreen from '../alertModal'
import { connect } from 'react-redux'

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

 class getInstructor extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Department: "",
            Salary: "",
            getInstructor: 0,
            action: false,
            
            
        }
        
        this.onNameChange = this.onNameChange.bind(this)
        this.onDepartmentChange = this.onDepartmentChange.bind(this)
        this.onSalaryChange = this.onSalaryChange.bind(this)
        this.Addinstructor = this.Addinstructor.bind(this)
        this.closeModalComfirm = this.closeModalComfirm.bind(this)
        this.closeModalCancel = this.closeModalCancel.bind(this)
       
     
        
    }
  

    onNameChange(e) {
        let Name = e.target.value
      
        this.setState(() => (
            {
               Name
            }
        ) 
            
        )
       
    }

    onDepartmentChange(e) {
       
        let Department = e.target.value
        
        this.setState(() => (
            {
               Department
            }
        ) 
            
        )
      
    }
     onSalaryChange(e) {
         
         
        this.setState(() => (
            {
               Salary:e.target.value
            }
        ) 
            
        )
         
       
     }
    


    Addinstructor() {
         
        
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

             if (this.state.Name && this.state.Department && this.state.Salary) {
            this.props.dispatch(firebaseSaveInstructor (this.state))
            this.state.Name = ""
            this.state.Department = ""
            this.state.Salary = ""
           
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
            
                 <Container >
                       
                 <Box textAlign={"right"}  height={40}  mt={12}  mb={5} color="green"  >
                        <Typography variant={'body1'} >
                        INSTRUCTOR
                        </Typography>
                    <Divider/>
                </Box>
            
                    
             <label>
                    Name:
                     <TextField placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                            onChange={this.onNameChange} 
                    />
             </label>
            
                 <label>
                    Department:
                    <TextField  placeholder="Department" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                          onChange={this.onDepartmentChange} 
                    />
                </label>



                 <label>
                    Salary:
                    <TextField  placeholder="Salary" type="number" variant="outlined"
                        fullWidth
                        color="primary"
                            margin="normal"
                        onChange={this.onSalaryChange}
                    />
                </label>
                
                
                     <HomeloadingScreen openModal={this.state.action} closeModalComfirm={this.closeModalComfirm} closeModalCancel={this.closeModalCancel} title={"Instructor"} message={"Comfirm the candidate as instructor"}/>
                    
                    
                    <Box my={5}>
                        <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} onClick={this.Addinstructor}>Add Instructor
                        </Button>
                    
                    </Box>      
              
            </Container>
              
            </ThemeProvider>
                
                
              
                
                
       
           

           
            
        )
    }
    
}


 export default connect(undefined)(getInstructor)