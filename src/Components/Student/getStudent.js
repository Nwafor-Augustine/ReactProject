import React from 'react'
import { connect } from 'react-redux'
import {newStudent,removeStudent} from '../../state/stateComponent/Student'
import { Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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
        if (this.state.Name && this.state.Department && this.state.Credit) {
            this.props.dispatch(newStudent(this.state))
            this.state.Name = ""
            this.state.Department = ""
            this.state.Credit = ""
           
        }
    
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
        <div>
            <label>
            Name: <input type="text" placeholder="Name" onChange={this.nameOnChange}></input>
            </label>
             <label>
            Department: <input type="text" placeholder="Department" onChange={this.departmentOnChange}></input>
            </label>
             <label>
            Creadit: <input type="number"placeholder="Creadits" min="0" onChange={this.creditOnChange}></input>
                </label>

                       <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} onClick={this.addNewstudent}>Add Student</Button>
               
        </div>
            
       ) 
    }
}

export default connect((state) => {
    return {
        students: state.Addstudent
    }
})(Students)

