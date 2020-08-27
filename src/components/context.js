import React, { Component,useState,createContext } from 'react'

export const BookContext = createContext();


export const MyProvider = props => {

    const [books,setBooks] = useState([
        {
            id: 1,
            bookName: 'Çanlar Kimin için Çalıyor',
            author: 'Ernst Hemingway',
            price: 34,
        },
        {
            id: 2,
            bookName: 'Çalınan Taç',
            author: 'Mark Twain',
            price: 12,
        },
    ])
        return (
            <BookContext.Provider value={[books,setBooks]}>
                {props.children}
            </BookContext.Provider>
        )
    
}

