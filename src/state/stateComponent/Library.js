// small library  data management
const textBooks = [
    {
    ISBN: "22333-33",
    Name: "find friends",
    Id: "0",
    Author: "jackspel",
    Time:2001
}
]


let addTextBooks = ({ISBN,Name,Id,Author,Time}) => (
    
    {
    type:"ADDTEXTBOOK",
    textBook:{
    ISBN,
    Name,
    Id,
    Author,
    Time
    }
}

)

let editTextBooks = (name, textBooks, {ISBN, Name,Id,Author,Time}) => {

    return {
        type: "EDITTEXTBOOKS",
        textBooks,
        ISBN,
        Name,
        Id,
        Author,
        Time,
        name
    }
    
}

let sortTextBooks = ({sortType,textBooks}) => {

  
   let sortTextBooks = textBooks.sort((a,b) => {
        if (sortType === "Name") {
            return a.Name < b.Name ? -1 : 1;
        } else if (sortType === "Date") {
            return a.Time < b.Time ? -1:1
           }
       })
    return {
        type: "SORT_TEXT_BOOK",
        sortTextBook:{
         sortTextBooks
       }
}
}

const bookReducer = (state=textBooks, action) => {
    

    switch (action.type) {
       
        case "ADDTEXTBOOK":
            return [
            ...state,
                { ...action.textBook }
            ]
        case "SORT_TEXT_BOOK":

            return  {
                    ...action.sortTextBook
                }
            
        case "EDITTEXTBOOKS":
            
             let edit = action.textBooks.filter((textbook) => {
           return textbook.Name === action.name ? true:false; 
             })
            
            edit[0].ISBN =action.ISBN
            edit[0].Name = action.Name
            edit[0].Id = action.Id
            edit[0].Author = action.Author
            edit[0].Time = action.Time
            return {
             ...action.textBooks,
                ...edit
            }
        
        default:
            return state
        
            
    }
}

export{bookReducer,addTextBooks, sortTextBooks,editTextBooks}