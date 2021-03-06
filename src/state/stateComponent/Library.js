import uuid from 'react-uuid'
import moment from 'moment'
import { dataBase } from '../../Components/firebase/firebase'


// actions



const textBooks = [
    {
        ISBN: "22333-33",
        Name: "find friends",
        Id: uuid(),
        Author: "jackspel",
        Time: moment().valueOf()
    }
]

// saving data in firebase and redux

let addTextBooks = ({ Id, ISBN, Name, Author }) => {


    return {
        type: "ADDTEXTBOOK",
        textBook: {

            ISBN,
            Name,
            Author,
            Time: moment().valueOf(),
            Id
        }
    }
}


let fireBaseDataSaved = (bookData) => {

    const {

        ISBN,
        Name,
        Author,

    } = bookData;

    const book = { ISBN, Name, Author };

    return (dispatch) => {

        dataBase.ref("Books").push(book).then((ref) => {
            dispatch(addTextBooks({ Id: ref.key, ...book }))
        })
    }
}

//removing data from firebase and redux

let removeBook = (id, books) => {

    return {
        type: "REMOVE_BOOK",
        id,
        books
    }

}

let firebaseRemoveBook = (id,books) => {
  
    return (dispatch) => {
        dataBase.ref(`Books/${id}`).remove().then(() => {
        dispatch(removeBook(id,books))
    })

    }
}



let editTextBooks = (bookName, textBooks, { ISBN, Name, Id, Author, Time }) => {

    return {
        type: "EDITTEXTBOOKS",
        textBooks,
        ISBN,
        Name,
        Id,
        Author,
        Time,
        bookName
    }

}




let sortTextBooks = ({ sortType, textBooks }) => {


    let sortTextBooks = textBooks.sort((a, b) => {
        if (sortType === "Name") {
            return a.Name < b.Name ? -1 : 1;
        } else if (sortType === "Date") {
            return a.Time < b.Time ? -1 : 1
        }
    })

    return {
        type: "SORT_TEXT_BOOK",
        sortTextBook: {
            sortTextBooks
        }
    }
}




const bookReducer = (state = textBooks, action) => {


    switch (action.type) {

        case "ADDTEXTBOOK":
            return [
                ...state,
                { ...action.textBook }

            ].sort((a, b) => {

                return b.Name < a.Name
            })




        case "SORT_TEXT_BOOK":

            return {
                ...action.sortTextBook
            }

        case "EDITTEXTBOOKS":



            let edit = action.textBooks.filter((textbook, index) => {
                return textbook.Name === action.bookName
            })

            if (edit) {

                // edit[0].ISBN = action.ISBN
                edit[0].Name = action.Name
                edit[0].Id = action.Id
                edit[0].Author = action.Author
                edit[0].Time = action.Time
            }


            return [
                ...action.textBooks,
            ]

        case "REMOVE_BOOK":

            let index = action.books.findIndex((book) => {
                return action.id === book.Id
            })

            action.books.splice(index, 1)
            action.books.sort((a, b) => {

                return b.Name < a.Name
            })

            return [

                ...state

            ]

        default:
            return state


    }
}

export { bookReducer, fireBaseDataSaved, sortTextBooks, editTextBooks, firebaseRemoveBook}