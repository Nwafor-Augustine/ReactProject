import React from 'react'
import { connect } from 'react-redux'
import {newStudent,removeStudent} from '../../state/stateComponent/Student'
import { Button,TextField,Container,ThemeProvider,createMuiTheme,Box, Typography,Divider} from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { green, blue } from '@material-ui/core/colors';
import HomeloadingScreen from '../alertModal'

let theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
            
        },
        secondary:{
          main:blue[800]
        }
    }
})





            
        
class Students extends React.Component{
    constructor(props) {
        super(props)
        this.state =
        {
            Name: "",
            Department: "",
            Credit: "",
            Filter:""
        }
        this.nameOnChange = this.nameOnChange.bind(this)
        this.departmentOnChange = this.departmentOnChange.bind(this)
        this.creditOnChange = this.creditOnChange.bind(this)
        this.addNewstudent = this.addNewstudent.bind(this)
        this.removeOnChange = this.removeOnChange.bind(this)
        this.closeModalComfirm = this.closeModalComfirm.bind(this)
        this.closeModalCancel = this.closeModalCancel.bind(this)
       
     
    }

  
     
    
    
    nameOnChange(e) {
       let Name = e.target.value
        this.setState(() => ({
          Name  
        })) 
        
     }

    departmentOnChange(e) {
        let Department = e.target.value
        this.setState(() => ({
            Department
        }))

    }
    
    creditOnChange(e) {
        let Credit = e.target.value
        this.setState(() => ({
            Credit
        }))

    }
     
    addNewstudent() {

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

              if (this.state.Name && this.state.Department && this.state.Credit) {
            this.props.dispatch(newStudent(this.state))
            this.state.Name = ""
            this.state.Department = ""
            this.state.Credit = ""
           
        }
             
        
    }
   
closeModalCancel() {
        this.setState(() => (
            {
                action: false,
               
                
            }
        ))
    
    }
   
    removeOnChange(e) {
    let  Filter = e.target.value
        this.setState(() => (
            {
                Filter 
          }
        )) 
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
             <Container >
                           
                 <Box textAlign={"right"}  height={40}  mt={8}  mb={5} color="green"  >
                        <Typography variant={'body1'} >
                         STUDENT
                        </Typography>
                    <Divider></Divider>
                    </Box>
                    
                <label>
                    Name:
                    <TextField type="text"  placeholder="Department" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                          onChange={this.nameOnChange} 
                    />
                </label>
 

                <label>
                    Department:
                    <TextField type="text"  placeholder="Department" variant="outlined" fullWidth
                        margin="normal"
                        color="primary"
                          onChange={this.departmentOnChange} 
                    />
                </label>

                  <label>
                    Credit:
                    <TextField type="text" style={{ margin: 8 }} placeholder="Department" variant="outlined" fullWidth
                        
                        margin="normal"
                        color="primary"
                          onChange={this.creditOnChange} 
                    />
                </label>

                  <HomeloadingScreen openModal={this.state.action} closeModalComfirm={this.closeModalComfirm} closeModalCancel={this.closeModalCancel} title={"Student"} message={"Comfirm the candidate as Student"}/>
                    
                    <Box my={5} >
                       <Button variant="contained" color="secondary" startIcon={<PersonAddIcon />} onClick={this.addNewstudent}>Add Student</Button>
                    </Box>
                  
                    
                                          
                    

               
        </Container>
            </ThemeProvider>
       
            
       ) 
    }
}

export default connect((state) => {
    return {
        students: state.Addstudent
    }
})(Students)

