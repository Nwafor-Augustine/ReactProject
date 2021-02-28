import React from 'react'
import { connect } from 'react-redux'
import { newSemester} from "../../state/stateComponent/Semester"
import {Box,TextField,Typography,Container,Button,ThemeProvider,createMuiTheme,Divider} from '@material-ui/core'
import { green,blue } from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add';
import HomeloadingScreen from '../alertModal'



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

class Semester extends React.Component {
      
    constructor(props) {
      super(props)
      this.state = {
        period: "",
        year: "",
        action:false
      }
      this.addSemester = this.addSemester.bind(this)
      this.onPeriodChange = this.onPeriodChange.bind(this)
      this.onYearChange = this.onYearChange.bind(this)
      this.closeModalComfirm = this.closeModalComfirm.bind(this)
      this.closeModalCancel = this.closeModalCancel.bind(this)
    }

  addSemester() {

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

              if (this.state.period && this.state.year) {
      this.props.dispatch(newSemester(this.state))
      this.state.period = ""
      this.state.year = ""
     
    } 
             
        
    }

  
  closeModalCancel() {
        this.setState(() => (
            {
                action: false,
               
                
            }
        ))
    
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

           <ThemeProvider theme={theme}>
           <Box mt={12}>
               <Container>
                    
                 <Box textAlign={"right"}  height={40}  mt={13}  mb={5} color="green"  >
                        <Typography variant={'body1'} >
                        SEMESTER
                        </Typography>
                    <Divider></Divider>
                </Box>
           

             <label>
                    Period:
                    <TextField  placeholder="Salary" type="text" variant="outlined"
                        fullWidth
                        color="primary"
                        margin="normal"
                        onChange={this.onPeriodChange}
                    />
              </label>


             <label>
                    Year:
                    <TextField  placeholder="Salary" type="text" variant="outlined"
                        fullWidth
                        color="primary"
                            margin="normal"
                        onChange={this.onYearChange}
                    />
            </label>

              
              <HomeloadingScreen openModal={this.state.action} closeModalComfirm={this.closeModalComfirm} closeModalCancel={this.closeModalCancel} title={"Semester"} message={"Comfirm the Semester addition "}/>
                    
            
             <Box my={5}>
                        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={this.addSemester}>Add Semester
                        </Button>
                    
                    </Box> 
        </Container>
             </Box>
           
           </ThemeProvider>
             
      
    )
      }
   
    
}


  
export default connect(undefined)(Semester)