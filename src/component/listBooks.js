
import React from 'react'


export let ListofBooks = (props) => (
  

    <div>
        {props.books.map((book) => {
             
            return (
                <div key = { book.Id }>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Author</td>
                                <td>ISBN</td>
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
                             { book.ISBN }
                                </td>
                              
                            </tr>
                          
                        </tbody>
                       
                     
                    </table>
                <button>Remove</button>
                </div>
            )
    })}
    </div>
)