import React from 'react'
import { connect } from 'react-redux'
import {ListOfSemester} from './ListOfSemester'
import { newSemester} from "../../state/stateComponent/Semester"

class Semester extends React.Component {
      
    constructor(props) {
      super(props)
      this.state = {
        period: "",
        year:""
      }
      this.addSemester = this.addSemester.bind(this)
      this.onPeriodChange = this.onPeriodChange.bind(this)
      this.onYearChange = this.onYearChange.bind(this)
    }

  addSemester() {

    if (this.state.period && this.state.year) {
      this.props.dispatch(newSemester(this.state))
      this.state.period = ""
      this.state.year = ""
    }

 
    
  }

  onPeriodChange(e) {
     let period = e.target.value
    this.setState(() => (
      {
        period
      }
    ))
  }

  onYearChange(e) {
     let year = e.target.value
    this.setState(() => (
      {
        year
      }
    ))
  }
    
    render() {
           return (
        <div>
            
            <label>
            
              Period: <input type="text" onChange={this.onPeriodChange}></input>

            </label>

            <label>
            Year:<input type="text" onChange={this.onYearChange}></input>
            </label>
                   
               <ListOfSemester store={this.props} />
               <button onClick={this.addSemester}>Add Semester</button>
        </div>
    )
      }
   
    
}


 let sections = connect((state) => {
    return {
        semesters:state.SemesterReducer
    }
 })(Semester)
export default sections