
import React from 'react'
import { store } from '../../state/Store'
import BasicTable from '../Library/showLibrary'


export let ListOfBooks = (props) => (
  

    <div>
        {props.books.map((book) => {
             
            return (
                <div key = { book.Id }>
                    <BasicTable storeAction={props} book={book}/>
                
                </div>
            )
    })}
    </div>
)