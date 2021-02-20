import { connect } from 'react-redux'
import React from 'react'
import { Instructor } from './ListOfIinstructor'
import {newInstructor } from '../../state/stateComponent/Instructor'
import Modal from 'react-modal'
import { Button, Container, TextField} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


class Instructors extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Department: "",
            Salary:""
        }

        this.onNameChange = this.onNameChange.bind(this)
        this.onDepartmentChange = this.onDepartmentChange.bind(this)
        this.onSalaryChange = this.onSalaryChange.bind(this)
        this.Addinstructor = this.Addinstructor.bind(this)
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
        if (this.state.Name && this.state.Department && this.state.Salary) {
            this.props.dispatch(newInstructor(this.state))
            this.state.Name = ""
            this.state.Department = ""
            this.state.Salary = ""
        }
        
  
     
    }

    
    render() {
        return (
           

                 <Container>
                <h1>Instructor</h1>
            
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

                <Instructor Instructors={this.props.Instructors} store={this.props} getpath={this.props.getpath}/>
                
                    
                   <Button variant="contained" color="primary"   startIcon={<PersonAddIcon />} onClick={this.Addinstructor}>Add Instructor</Button>
             

                 <Modal
                    isOpen={false}
                    ariaHideApp={false}
                
                >
                    <h1>Instructor</h1> 
                    <p>Comfirm</p>
                    <Button>Ok</Button>
                </Modal>
            </Container>
              
                
                
       
           

           
            
        )
    }
    
}


let connectedInstructor = connect((state) => {
    return {
        Instructors:state. Addinstructor
    }
})(Instructors)

export default connectedInstructor