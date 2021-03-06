import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import {Chip,Button }from '@material-ui/core'
import React from 'react'
import { orange } from '@material-ui/core/colors'
import { firebaseRemoveInstructor } from '../../state/stateComponent/Instructor'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    backgroundColor: orange[500],
    height:50
  }
});


export default function BasicTable(props) {
  const classes = useStyles();

    return (
      <Paper elevation={6} >
        <header className={classes.title}></header>
       <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">S/N</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Salary</TableCell>
              </TableRow>
              </TableHead>
              
              <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="left">
               1
                </TableCell>
                            <TableCell align="right">
                             {props.instructor.Name}
                            </TableCell>            
              <TableCell align="right">{props.instructor.Department}</TableCell>
              <TableCell align="right">{props.instructor.Salary}</TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
            </TableContainer>
    <Chip
       
        label="delete"
        color="secondary"
       onDelete={
         () => {
             
           props.store.dispatch(firebaseRemoveInstructor(props.instructor.serialNumber,props.store.mapinstructor))
           
                       
                }
                       
                    }
     />
            <Button  color="primary" variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
      </Paper>
   
  );
}