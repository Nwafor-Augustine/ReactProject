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
import {firebaseRemoveStudent } from '../../state/stateComponent/Student';





const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable(props) {
  const classes = useStyles();

    return (
      <Paper elevation={6} >
       <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">S/N</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Credit</TableCell>
        </TableRow>
      </TableHead>
              
             <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="left"> </TableCell>
                                  
                            <TableCell align="right">{props.student.Name}</TableCell>
                            <TableCell align="right">{props.student.Department}</TableCell>
                            <TableCell align="right">{props.student.Credit}</TableCell>
                            
            </TableRow>
    
        </TableBody>
      </Table>
            </TableContainer>
             <Chip
       
        label="delete"
        color="secondary"
       onDelete={
           () => {
                           
                            props.store.dispatch(firebaseRemoveStudent (props.student.Id, props.store.mapstudent))
                       
             
             
                        }
                       
                    }
            />
            <Button href="/edit"  color="primary" variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
      </Paper>
   
  );
}