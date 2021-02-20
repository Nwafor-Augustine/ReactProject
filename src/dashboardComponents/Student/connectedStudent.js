import React from 'react'
import { connect } from 'react-redux'
import { ListOfStudent } from '../../component/ListOfStudent'
import {newStudent,removeStudent} from './student'

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
                
                <React.Fragment>
                    
                    <ListOfStudent
                      
                        removeStudent={this.removeStudent}
                        removeOnChange={this.removeOnChange}
                        store={this.props}
                    />
                    
                    <button onClick={this.addNewstudent}>Add Student</button>
                     
                </React.Fragment>
        </div>
            
       ) 
    }
}

let connectedStudent = connect((state) => (
    {
       students:state.Addstudent
    }
))(Students)

export default connectedStudent;