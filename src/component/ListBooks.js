
import React from 'react'
import {removeBook} from '../state/stateComponent/Library'
import { store } from '../state/state'



export let ListOfBooks = (props) => (
  

    <div>
        {props.books.map((book) => {
             
            return (
                <div key = { book.Id }>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Author</td>
                                <td>ID</td>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                
                               <td >
                             { book.Name }
                                </td>

                                 <td>
                             { book.Author }
                                </td>

                                <td>
                             { book.Id }
                                </td>
                              
                            </tr>
                          
                        </tbody>
                       
                     
                    </table>
                    <button onClick={  ()=> {  
                                            props.store.dispatch(removeBook(book.Id,props.books))
                        console.log(store.getState())
                        
                                          } 
                                    }>Remove   
                    </button>
                    <button>Edit</button>
                </div>
            )
    })}
    </div>
)