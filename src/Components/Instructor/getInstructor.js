
import React from 'react'
import {newInstructor } from '../../state/stateComponent/Instructor'
import { Button, Container, TextField,Avatar} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ResponsiveDialog from '../alertModal'
import { connect } from 'react-redux'


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
        this.comfirmAndAddInstructor = this.comfirmAndAddInstructor.bind(this)
     
        
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
    
    comfirmAndAddInstructor() {
         
        this.setState(() => (
            {
                 action: true,
            }
        ) 
            
         )
         
        
       
       
        if (this.state.getInstructor) {
            this.setState(() => (
            {
             getInstructor:0
            }
        ) 
            
            )
            
        } else {
            this.setState(() => (
            {
                    getInstructor: 1,
                    action:false
            }
        ) 
            
            )
            
        }
         
    }

    Addinstructor() {
         
        
     this.comfirmAndAddInstructor()     
     
     
     
    }

    closeModalComfirm() {
        this.setState(() => (
            {
                action: false,
               
                
            }
        ))

             if (this.state.Name && this.state.Department && this.state.Salary) {
            this.props.dispatch(newInstructor(this.state))
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
           

                 <Container>
                <h1>Instructor</h1>
            
                
                     <React.Fragment>
                    
             <label>
                    Name:
                     <TextField style={{ margin: 8 }} placeholder="Name" variant="outlined" fullWidth
                        margin="normal"
                        color="secondary"
                            onChange={this.onNameChange} 
                    />
             </label>
            
                 <label>
                    Department:
                    <TextField style={{ margin: 8 }} placeholder="Department" variant="outlined" fullWidth
                        margin="normal"
                        color="secondary"
                          onChange={this.onDepartmentChange} 
                    />
                </label>



                 <label>
                    Salary:
                    <TextField style={{ margin: 8 }} placeholder="Salary" type="number" variant="outlined"
                        fullWidth
                        color="secondary"
                            margin="normal"
                        onChange={this.onSalaryChange}
                    />
                </label>
                    </React.Fragment>
                

              
                
                     <ResponsiveDialog openModal={this.state.action} closeModalComfirm={this.closeModalComfirm} closeModalCancel={this.closeModalCancel}/>
                
                    <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} onClick={this.Addinstructor}>Add Instructor</Button>
                    
                   
                    
              
            </Container>
              
                
                
       
           

           
            
        )
    }
    
}


 export default connect(undefined)(getInstructor)