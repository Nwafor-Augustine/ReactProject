import { connect } from 'react-redux'
import React from 'react'
import { Instructor } from '../component/ListOfIinstructor'
import {newInstructor } from '../state/stateComponent/Instructor'
import Modal from 'react-modal'

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
      let Salary = e.target.value
        this.setState(() => (
            {
               Salary
            }
        ) 
            
        )
       
    }

    Addinstructor() {

    this.props.dispatch(newInstructor(this.state))
      
    }

    
    render() {
        return (
           

                 <div>
                <h1>Instructor</h1>
                <label>
                Name:<input type="text" placeholder="Name" onChange={this.onNameChange}></input>
                </label>
                 <label>
                Department:<input type="text" placeholder="Name" onChange={this.onDepartmentChange}></input>
                </label>
                 <label>
                Salary:<input type="number"placeholder="Name" onChange={this.onSalaryChange}></input>
                </label>
                <Instructor Instructors={this.props.Instructors} store={this.props} />
                
                    
                   <button onClick={this.Addinstructor}>Add Instructor</button>
             

                 <Modal
                    isOpen={false}
                    ariaHideApp={false}
                
                >
                    <h1>Instructor</h1> 
                    <p>Comfirm</p>
                    <button>Ok</button>
                </Modal>
            </div>
              
                
                
       
           

           
            
        )
    }
    
}


let connectedInstructor = connect((state) => {
    return {
        Instructors:state. Addinstructor
    }
})(Instructors)

export default connectedInstructor