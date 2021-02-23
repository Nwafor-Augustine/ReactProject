
import React from 'react'
import { connect } from 'react-redux'
import BasicTable from '../Library/showLibrary'


let ListOfBooks = (props) => (
  
        props.books.map((book) => {
             
            return (
                <div key = { book.Id }>
                    <BasicTable storeAction={props} book={book}/>
                
                </div>
            )
    })
    
)

 export default connect((state) => (
    {
       books:state.AddBook
    }
))(ListOfBooks)